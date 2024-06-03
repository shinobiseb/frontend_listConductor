import React, { useState } from 'react';
import { defaultTracks, Track, Tracklist, PlaylistType } from './assets/tracks';
import SongList from './components/SongList';
import Header from './components/Header';
import AddSong from './components/AddSong';
import Footer from './components/Footer';
import PlaylistList from './components/PlaylistList';
import AddPlaylist from './components/AddPlaylist';

function App() {
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Default', tracks: defaultTracks }
  ];

  // Playlist Collection
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
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
      <Header />
      {/* <AddPlaylist 
        setPlaylist={updatePlaylistCollection}
      />
      <PlaylistList 
        setPlaylistCollection={setPlaylistCollection} 
        playlistCollection={playlistCollection} 
      /> */}
      <AddSong 
        addSongToPlaylist={onPlaylistChange} 
        songs={songs}
      />
      <SongList playList={songs}/>
      <Footer/>
    </div>
  );
}

export default App;
