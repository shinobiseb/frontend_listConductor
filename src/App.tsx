import { useState, useEffect } from 'react';
import { Track, PlaylistType } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';
import AddSong from './components/AddSong';
import OpenAddSong from './components/OpenAddSong';
import { useLocalStorage } from './components/useLocalStorage';

const { setItem, getItem, removeItem, clear } = useLocalStorage('playlistCollection');

function App() {
  
// ----------------- Prereq functions -------------------

// Default Playlist
const initialPlaylistCollection: PlaylistType[] = [
  { name: 'Playlist', tracks: defaultTracks },
  { name: 'Playlist 2', tracks: [] }
];

// ------------------- STATES ----------------------------

  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);
  const [currentPlaylist, setCurrentPlaylist] = useState(initialPlaylistCollection[0].tracks)
  //Add Song
  const [isOpen, setIsOpen] = useState(false)

//------------------ State Functions ----------------------

const removeSongFun = (index: number) => {
  setCurrentPlaylist(current => ({
    ...current,
    tracks: current.filter((_, i) => i !== index)
  }));
  console.log(currentPlaylist); // Assuming you want to log the updated playlist
};

const updatePlaylistFun = (newSong : Track) => {
  setCurrentPlaylist(current => ({
    ...current,
    tracks: [...current, newSong]
  }));
};

  // Update playlist Collection
const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
  setPlaylistCollection(current => [...current, newPlaylist]);
};

const addSongtoLocalStorage = (newSong : Track, playlist: PlaylistType) => {
  //get playlist title to update
  const targetPlaylist = playlistCollection.find((pl)=> pl.name === playlist.name)
  //remove, or add song to that playlist
  if(targetPlaylist && targetPlaylist.tracks){
    setItem(targetPlaylist.name, 
      JSON.stringify(targetPlaylist.tracks.push(newSong))
    )
  } else {
    console.warn(targetPlaylist + 'is messed up')
  }
}

// ---------------------- UseEffect -----------------------
useEffect(() => {
  const AddPlaylistButton = document.getElementById('AddPlaylistButton');
  const AddSongButton = document.getElementById('AddSongButton');
  const RemoveSongButton = document.getElementById('RemoveSongButton')

  if (RemoveSongButton !== null && RemoveSongButton.onclick !== null) {
    RemoveSongButton.onclick = () => {
      
    };
  }

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
      />
      <main className='flex flex-col h-full w-full justify-end items-center'>
        <Featured />
        <AddSong
          addSongToPlaylist={updatePlaylistFun}
          songs={currentPlaylist}
          openBool={isOpen}
          setOpen={setIsOpen}
        />
        <OpenAddSong
          setOpen={setIsOpen}
          openState={isOpen}
        />
        <SongList 
          tracklist={currentPlaylist}
          removeSong={removeSongFun}
        />
      </main>
    </div>
  );
}

export default App;