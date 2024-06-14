import React, { useState, useEffect } from 'react';
import { Track, PlaylistType, AddPlayProps, AddSongProps } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';
import AddSong from './components/AddSong';
import OpenAddSong from './components/OpenAddSong';

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
    setCurrentPlaylist(current => current.filter((_, i) => i !== index));
  };

  const updatePlaylistFun = (newSong : Track) => {
    setCurrentPlaylist(current => [...current, newSong])
  }

  // Update playlist Collection
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };


// ---------------------- UseEffect -----------------------

useEffect(() => {
    localStorage.setItem('playlistCollection', JSON.stringify(playlistCollection));
    console.log(playlistCollection)
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
