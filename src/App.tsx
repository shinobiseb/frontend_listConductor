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

const { setItem, getItem, removeItem, clear } = useLocalStorage('playlistCollection');

function App() {
  
// ----------------- Prereq functions -------------------

// Default Playlist
const initialPlaylistCollection: PlaylistType[] = [
  { name: 'Playlist', tracks: defaultTracks },
  { name: 'Playlist 2', tracks: [] }
];

function getPlaylistCollectionfromLocalStorage() {
  const playlists = {...localStorage}
  console.log(playlists)

  if (!playlists) {
    return initialPlaylistCollection;
  } else {
    const localStorageCollection: PlaylistType[] = [];
    for (const [key, value] of Object.entries(playlists)) {
      if (key !== 'loglevel') {
        try {
          console.log(value)
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
    console.table(localStorageCollection);
    return localStorageCollection;
  }
}



// ------------------- STATES ----------------------------

  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(getPlaylistCollectionfromLocalStorage());
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistType>(initialPlaylistCollection[0])
  //Add Song
  const [isOpen, setIsOpen] = useState(false)

//------------------ State Functions ----------------------

const removePlaylistFun = (index: number) => {
  setPlaylistCollection(current => {
    const updatedPlaylists = [...current];
    updatedPlaylists.splice(index, 1);
    return updatedPlaylists;
  });
};

const removeSongFun = (index: number) => {
  setCurrentPlaylist(current => ({
    ...current,
    tracks: current.tracks.filter((_, i) => i !== index)
  }));
  // deleteSongtoLocalStorage(currentPlaylist)
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
};

const addSongtoLocalStorage = (newSong : Track, playlist: PlaylistType) => {
  const targetPlaylist = playlistCollection.find((pl)=> pl.name === playlist.name)
  if(targetPlaylist && targetPlaylist.tracks){
    setItem(targetPlaylist.name, JSON.stringify(targetPlaylist.tracks.push(newSong)))
  } else {
    console.error(targetPlaylist?.name + 'is messed up')
  }
}

// const deleteSongtoLocalStorage = (playlist : PlaylistType) => {
//   const targetPlaylist = playlistCollection.find((pl)=> pl.name === playlist.name)
//   if(targetPlaylist && targetPlaylist.tracks){
//   } else {
//     console.error(targetPlaylist?.name + 'is messed up')
//   }
// }

// ---------------------- UseEffect -----------------------
useEffect(() => {
  // const AddPlaylistButton = document.getElementById('AddPlaylistButton');
  // const AddSongButton = document.getElementById('AddSongButton');
  // const RemoveSongButton = document.getElementById('RemoveSongButton')

  playlistCollection.map((playlist)=> {
    localStorage.setItem(playlist.name, JSON.stringify(playlist.tracks))
  })
}, [playlistCollection]);
// -------------------- RETURN -----------------------------


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
          songs={currentPlaylist.tracks}
          openBool={isOpen}
          setOpen={setIsOpen}
        />
        <OpenAddSong
          setOpen={setIsOpen}
          openState={isOpen}
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