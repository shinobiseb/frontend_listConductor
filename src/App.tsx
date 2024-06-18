import { useState, useEffect } from 'react';
import { Track, PlaylistType } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';
import AddSong from './components/AddSong';
import OpenAddSong from './components/OpenAddSong';
import { useLocalStorage } from './components/useLocalStorage';
import { json } from 'stream/consumers';

const { setItem, getItem, removePlay, clear } = useLocalStorage('playlistCollection');

function App() {
  
// ----------------- Prereq functions -------------------

// Default Playlist
const initialPlaylistCollection: PlaylistType[] = [
  { name: 'Playlist', tracks: defaultTracks },
  { name: 'Playlist 2', tracks: [] }
];

function getPlaylistCollectionfromLocalStorage() {
  const playlists = {...localStorage}

  if (!playlists) {
    return initialPlaylistCollection;
  } else {
    const localStorageCollection: PlaylistType[] = [];
    for (const [key, value] of Object.entries(playlists)) {
      if (key !== 'loglevel') {
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
        console.warn(`${key} may not be a playlist \nkey: ${key} value: ${value}`)
      }
    }
    return localStorageCollection;
  }
}



// ------------------- STATES ----------------------------

  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(getPlaylistCollectionfromLocalStorage());
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistType>(getPlaylistCollectionfromLocalStorage()[0])
  //Add Song
  const [isOpen, setIsOpen] = useState(false)

//------------------ State Functions ----------------------

const removePlaylistFun = (index: number) => {
  setPlaylistCollection((current) => {
    const updatedPlaylists = [...current];
    return updatedPlaylists.filter((_, i) => i !== index);
  });
  const targetPlaylist = playlistCollection[index]
  removePlaylistFromLocalStorage(targetPlaylist)
};

const removeSongFun = (index: number) => {
  setCurrentPlaylist(current => ({
    ...current,
    tracks: current.tracks.filter((_, i) => i !== index)
  }));
};

const updatePlaylistFun = (newSong: Track) => {
  setCurrentPlaylist(current => ({
    ...current,
    tracks: [...current.tracks, newSong]
  }));
  addSongtoLocalStorage(newSong, currentPlaylist)
};

  // Update playlist Collection
const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
  setPlaylistCollection(current => [...current, newPlaylist]);
  localStorage.setItem(newPlaylist.name, JSON.stringify(newPlaylist.tracks));
};

const addSongtoLocalStorage = (newSong : Track, playlist: PlaylistType) => {
  const targetPlaylist = playlistCollection.find((pl)=> pl.name === playlist.name)

  if(targetPlaylist === undefined) {
    console.log(typeof(targetPlaylist))
  }

  if(targetPlaylist && targetPlaylist.tracks && newSong){
    setItem(targetPlaylist.name, JSON.stringify(targetPlaylist.tracks.push(newSong)))
    console.log(`${newSong} was logged to ${targetPlaylist.name} in local storage`)
  } else {
    console.error(targetPlaylist?.name + 'is messed up')
  }
}

const removePlaylistFromLocalStorage = (playlist : PlaylistType) => {
  const targetPlaylist = playlistCollection.find((pl) => pl.name === playlist.name);
  console.log(`TargetPlaylist is: ${targetPlaylist}`);

  if(targetPlaylist && targetPlaylist.tracks) {
    removePlay(targetPlaylist);
    console.log(`${targetPlaylist.name} successfully removed`);
  } else {
    console.warn(`${targetPlaylist?.name} not removed`);
  }
}

// ---------------------- UseEffect -----------------------
useEffect(() => {
  const storedCollection = getPlaylistCollectionfromLocalStorage();
  setPlaylistCollection(storedCollection);
}, []); // Only run once on mount
// -------------------- RETURN -----------------------------

setItem(initialPlaylistCollection[0].name, initialPlaylistCollection[0].tracks)

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
        <Featured />
        <AddSong
          addSongToPlaylist={updatePlaylistFun}
          songs={ currentPlaylist ? currentPlaylist.tracks : initialPlaylistCollection[0].tracks}
          openBool={isOpen}
          setOpen={setIsOpen}
        />
        <OpenAddSong
          setOpen={setIsOpen}
          openState={isOpen}
        />
        {currentPlaylist.tracks && currentPlaylist.tracks.length > 0 ? (
  <SongList 
    tracklist={currentPlaylist.tracks}
    removeSong={removeSongFun}
  />
) : (
  <p>No songs available in this playlist.</p>
)}
      </main>
    </div>
  );
}

export default App;