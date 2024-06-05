import React, { useState } from 'react';
import { Track, Tracklist, PlaylistType } from './assets/types';
import SongList from './components/SongList';
import Header from './components/Header';
import AddSong from './components/AddSong';
import Footer from './components/Footer';
import PlaylistList from './components/PlaylistList';
import AddPlaylist from './components/AddPlaylist';
import OpenAddSong from './components/OpenAddSong';
import Sidebar from './components/Sidebar';
import { defaultTracks } from './assets/tracks';

function App() {

  // User
  const [user, setUser] = useState('SketchtheConductor')

  // Default Playlist
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Default', tracks: defaultTracks }
  ];

  // OpenAddSong Button
  const [open, setOpen] = useState(false)

  // Current Playlist
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);

  // Update playlist array
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };

  // Individual songs
  const [songs, setSongs] = useState<Track[]>(defaultTracks);

  // Update playlist with new song 
  const onPlaylistChange = (newSong: Track) => {
    setSongs(current => [...current, newSong]);
  };

  return (
    <div className="App font-sans flex flex-row w-screen h-screen items-center">
      <Sidebar userName={user} userPlaylists={playlistCollection}/>
      {/* <AddPlaylist 
        setPlaylist={updatePlaylistCollection}
      />
      <PlaylistList 
        setPlaylistCollection={setPlaylistCollection} 
        playlistCollection={playlistCollection} 
      /> */}
      <main className="flex flex-col h-full w-full justify-center items-center">
        <Header/>
        <OpenAddSong 
        setOpen={setOpen}
        openState={open}
        />
        <AddSong 
          addSongToPlaylist={onPlaylistChange} 
          songs={songs}
          openBool={open}
        />
        <SongList playList={songs}/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
