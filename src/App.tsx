import { useState, useEffect } from 'react';
import { Track, PlaylistType, SpotifyTrack, userDataType } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import AddSong from './components/AddSong';
import { useLocalStorage } from './components/useLocalStorage';
import { Buffer } from 'buffer';
import PlaylistEditor from './components/PlaylistEditor';
import CodeVerifier from './components/CodeVerifier';

const { setPlay, setSong, getPlaylist, removePlay, removeSong } = useLocalStorage('playlistCollection');

function App() {
  const secret = import.meta.env.VITE_SECRET;
  const clientID = import.meta.env.VITE_CLIENTID;
  const redirectURIEnv = import.meta.env.MODE === "development" ? 'http://localhost:5173/frontend_listConductor/' : "https://shinobiseb.github.io/frontend_listConductor/"

  // ----------------- Prereq functions -------------------

  //Refactor for better ignoring of other values
  function getPlaylistCollectionFromLocalStorage() {
    const playlists = { ...localStorage };
    const localStorageCollection: PlaylistType[] = [];
    for (const [key, value] of Object.entries(playlists)) {
      if (
        key !== 'loglevel' && 
        key !== 'Spotify Token' && 
        key !== 'code_verifier' && 
        key !== 'authCode' && 
        key !== 'access_token' && 
        key !== "token_expires"
      ) {
        try {
          const tracks = JSON.parse(value);
          localStorageCollection.push({
            name: key,
            tracks: Array.isArray(tracks) ? tracks : []
          });
        } catch (e) {
          console.error(`Error parsing JSON for key ${key}:`, e);
        }
      }
    }
    return localStorageCollection;
  }


  function isSpotifyTokenExpired(): boolean {
    const expiresAt = localStorage.getItem('token_expires');
    if (!expiresAt) return true;

    const now = Date.now();
    return now >= parseInt(expiresAt, 10);
  }

  // ------------------- STATES ----------------------------
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(getPlaylistCollectionFromLocalStorage());
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistType>(getPlaylistCollectionFromLocalStorage()[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [token, setToken] = useState<string>("");
  const [ isSpotifyAuth, setIsSpotifyAuth ] = useState(false)
  const [ userData, setUserData ] = useState<userDataType | null>(null)
  const [ userId, setUserId ] = useState<string>("")

  //------------------ State Functions ----------------------

  const removePlaylistFun = (index: number) => {
    setPlaylistCollection((current) => {
      const updatedPlaylists = [...current];
      const finalPlaylist = updatedPlaylists.filter((_, i) => i !== index)
      return finalPlaylist;
    });
    const targetPlaylist = playlistCollection[index];
    removePlaylistFromLocalStorage(targetPlaylist);
  };

  //Get User Data
  useEffect(()=> {
    async function getUserID() {
      const token = localStorage.getItem('access_token');
      if (!token) return;

      const userParams = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    };

      try {
        const response = await fetch("https://api.spotify.com/v1/me", userParams)
        if (!response.ok) {
          const errorText = await response.text();
          console.error("HTTP GET /me failed:", response.status, errorText);
        }
        let data = await response.json()
        console.log(data)
        setUserData(data)
      } catch (error) {
        console.error(error)
      }
    }

    if(token){
      getUserID()
    }
  }, [token])


  const removeSongFun = (index: number) => {
    setCurrentPlaylist(current => ({
      ...current,
      tracks: current.tracks.filter((_, i) => i !== index)
    }));
    removeSong(index, currentPlaylist);
  };

  const updatePlaylistFun = (newSong: SpotifyTrack) => {
    addSongToLocalStorage(newSong, currentPlaylist);
    setCurrentPlaylist(current => ({
      ...current,
      tracks: [...current.tracks, newSong]
    }));
  };

  // Update playlist Collection
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    const playlist = getPlaylist(newPlaylist.name);
    if (playlist === undefined || playlist === null) {
      setPlaylistCollection(current => [...current, newPlaylist]);
      setPlay(newPlaylist.name, newPlaylist.tracks);
      return;
    } else {
      console.log(`${playlist} exists already!`);
    }
  };

  const addSongToLocalStorage = (newSong: Track | SpotifyTrack, playlist: PlaylistType) => {
    const targetPlaylist = playlistCollection.find((pl) => pl.name === playlist.name);

    if (targetPlaylist && targetPlaylist.tracks && newSong) {
      setSong(newSong, playlist);
      console.log(`${(newSong as Track).title || (newSong as SpotifyTrack).name} was logged to ${targetPlaylist.name} in local storage`);
    } else {
      console.error(`${targetPlaylist?.name} is messed up`);
    }
  };

  const removePlaylistFromLocalStorage = (playlist: PlaylistType) => {
    const targetPlaylist = playlistCollection.find((pl) => pl.name === playlist.name);
    if (targetPlaylist && targetPlaylist.tracks) {
      removePlay(targetPlaylist);
      console.log(`${targetPlaylist.name} successfully removed`);
    } else {
      console.warn(`${targetPlaylist?.name} not removed`);
    }
  };

  // ---------------------- UseEffect -----------------------
  useEffect(() => {
    const storedCollection = getPlaylistCollectionFromLocalStorage();
    setPlaylistCollection(storedCollection);
    if(storedCollection) {
      setCurrentPlaylist(storedCollection[0]);
    }
  }, []);

  useEffect(()=> {
    console.log(userData)
    if(userData && userData.id){
      setUserId(userData.id)
    }
  }, [userData])

  useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  async function exchangeCodeForToken(authCode: string) {
    const codeVerifier = localStorage.getItem('code_verifier');
    const clientId = import.meta.env.VITE_CLIENTID;
    const redirectUri = redirectURIEnv;

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier || '',
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const data = await response.json();

    if (data.access_token) {
      const expiresAt = Date.now() + data.expires_in * 1000;
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('token_expires', expiresAt.toString());
      setToken(data.access_token);
      setIsSpotifyAuth(true);
    } else {
      console.error('Failed to get user token:', data);
    }
  }

  if (code && !localStorage.getItem('access_token')) {
    exchangeCodeForToken(code);
  }
}, []);



  // -------------------- RETURN -----------------------------

  //--------------Spotify Auth Check
  if(!isSpotifyAuth){
    return (
      <CodeVerifier
        setToken={setToken}
        token={token}
        setUserId={setUserId}
        setIsSpotifyAuth={setIsSpotifyAuth}
      />
    )
  }

  if(!currentPlaylist || playlistCollection.length === 0) {
    return (
      <div className="App font-sans flex flex-col sm:flex-row w-screen h-screen items-center sm:items-end p-2 overflow-hidden">
        <Sidebar
          userPlaylists={playlistCollection}
          updatePlayColl={updatePlaylistCollection}
          setCurrentPlaylist={setCurrentPlaylist}
          currentPlaylist={currentPlaylist}
          removePlaylist={removePlaylistFun}
        />
        <main className='overflow-y-auto flex flex-col h-full w-full justify-end items-center'>
        </main>
      </div>
    );
  } else return (
    <div className="App font-sans flex flex-col sm:flex-row w-screen h-screen items-center sm:items-end p-2">
      <Sidebar
        userPlaylists={playlistCollection}
        updatePlayColl={updatePlaylistCollection}
        setCurrentPlaylist={setCurrentPlaylist}
        currentPlaylist={currentPlaylist}
        removePlaylist={removePlaylistFun}
      />
      <PlaylistEditor
        currentPlaylist={currentPlaylist}
        addSongToPlaylist={updatePlaylistFun}
        songs={currentPlaylist.tracks}
        openBool={isOpen}
        setOpen={setIsOpen}
        token={token}
        tracklist={currentPlaylist.tracks}
        removeSong={removeSongFun}
        playlistToImport={currentPlaylist}
        userId={userId}
      />
    </div>
  );
}

export default App;
