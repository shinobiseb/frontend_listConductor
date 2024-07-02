import { useState, useEffect } from 'react';
import { Track, PlaylistType, SpotifyTrack } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import AddSong from './components/AddSong';
import OpenAddSong from './components/OpenAddSong';
import { useLocalStorage } from './components/useLocalStorage';
import Gallery from './components/Gallery';
import { Buffer } from 'buffer';

const { setPlay, setSong, getPlaylist, removePlay, removeSong } = useLocalStorage('playlistCollection');

function App() {
  const secret = import.meta.env.VITE_SECRET;
  const clientID = import.meta.env.VITE_CLIENTID;

  // ----------------- Prereq functions -------------------

  function getPlaylistCollectionFromLocalStorage() {
    const playlists = { ...localStorage };
    const localStorageCollection: PlaylistType[] = [];
    for (const [key, value] of Object.entries(playlists)) {
      if (key !== 'loglevel' && key !== 'Spotify Token') {
        try {
          const tracks = JSON.parse(value);
          localStorageCollection.push({
            name: key,
            tracks: Array.isArray(tracks) ? tracks : []
          });
        } catch (e) {
          console.error(`Error parsing JSON for key ${key}:`, e);
        }
      } else {
        console.warn(`${key} may not be a playlist`);
      }
    }
    return localStorageCollection;
  }

  // Get Token Function
  const getAuthToken = async () => {
    const authString = `${clientID}:${secret}`;
    const authBytes = Buffer.from(authString, 'utf-8').toString('base64');

    const url = "https://accounts.spotify.com/api/token";

    const result = await fetch(url, {
      method: 'POST',
      headers: {
        "Authorization": `Basic ${authBytes}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    setToken(data.access_token);
    return data.access_token;
  };

  // ------------------- STATES ----------------------------
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(getPlaylistCollectionFromLocalStorage());
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistType>(getPlaylistCollectionFromLocalStorage()[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [token, setToken] = useState("");

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

  const removeSongFun = (index: number) => {
    setCurrentPlaylist(current => ({
      ...current,
      tracks: current.tracks.filter((_, i) => i !== index)
    }));
    console.log(index);
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
    if (!token) {
      getAuthToken()
    }
  }, []);

  // -------------------- RETURN -----------------------------
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
          <Featured/>
          <Gallery/>
        </main>
      </div>
    );
  }
  
  return (
    <div className="App font-sans flex flex-col sm:flex-row w-screen h-screen items-center sm:items-end p-2">
      <Sidebar
        userPlaylists={playlistCollection}
        updatePlayColl={updatePlaylistCollection}
        setCurrentPlaylist={setCurrentPlaylist}
        currentPlaylist={currentPlaylist}
        removePlaylist={removePlaylistFun}
      />
      <main className='flex flex-col h-full w-full justify-end items-center'>
        <Featured/>
        <AddSong
          addSongToPlaylist={updatePlaylistFun}
          songs={currentPlaylist.tracks}
          openBool={isOpen}
          setOpen={setIsOpen}
          token={token}
          />
      
          <SongList
            tracklist={currentPlaylist.tracks}
            removeSong={removeSongFun}
          />
      </main>
    </div>
  );
}

export default App;
