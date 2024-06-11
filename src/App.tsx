import React, { useState } from 'react';
import { Track, PlaylistType } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';

function App() {
  // Default Playlist
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Default', tracks: defaultTracks }
  ];

  // Current User Playlists
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);

  // Update playlist Collection
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };

  function currentPlaylistTracksFun(playlist: PlaylistType[], index: number) {
    return playlist[index].tracks ? playlist[index].tracks : [];
  }


  return (
    <div className="App font-sans flex flex-col sm:flex-row w-screen h-screen items-center sm:items-end p-2">
      <Sidebar 
        userPlaylists={playlistCollection} 
        updatePlayColl={updatePlaylistCollection}

      />
      <main className='flex flex-col h-full w-full justify-end items-center'>
        <Featured />
        <SongList tracklist={currentPlaylistTracksFun(playlistCollection, 0)} />
      </main>
    </div>
  );
}

export default App;
