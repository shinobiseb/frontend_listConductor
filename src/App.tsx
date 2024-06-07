import React, { useState, useContext } from 'react';
import { Track, Tracklist, PlaylistType } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';


function App() {

  // Default Playlist
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Default', tracks: defaultTracks }
  ];

  // User Playlists
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);

  // Current Playlist
  const [currentPlay, setCurrentPlay] = useState()

  // Update playlist Collection
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };

  return (
    <div className="App font-sans flex flex-col sm:flex-row w-screen h-screen items-center sm:items-end p-2">
      <Sidebar 
      userPlaylists={playlistCollection} 
      updatePlay={updatePlaylistCollection}/>
      <main className='flex flex-col h-full w-full justify-end items-center'>
        <Featured/>
        <SongList tracklist={playlistCollection}/>
      </main>
    </div>
  );
}

export default App;
