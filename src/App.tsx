import React, { useState } from 'react';
import { Track, PlaylistType, AddPlayProps, AddSongProps } from './assets/types';
import SongList from './components/SongList';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';
import Featured from './components/Featured';
import AddSong from './components/AddSong';
import OpenAddSong from './components/OpenAddSong';

function App() {
  // Default Playlist
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Playlist', tracks: defaultTracks },
    { name: 'Playlist 2', tracks: [] }
  ];

  // Current Playlist
  const [currentPlaylist, setCurrentPlaylist] = useState(initialPlaylistCollection[0].tracks)


  const updatePlaylistFun = (newSong : Track) => {
    setCurrentPlaylist(current => [...current, newSong])
  }

  // User Playlists
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);

  // Update playlist Collection
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };

  // Display State of Add Song Form
  const [isOpen, setIsOpen] = useState(false)


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
        <SongList tracklist={currentPlaylist} />
      </main>
    </div>
  );
}

export default App;
