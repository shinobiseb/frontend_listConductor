import React, { useState } from 'react';
import { tracks, Track, Tracklist, PlaylistType } from './assets/tracks';
import SongList from './components/SongList';
import Header from './components/Header';
import AddSong from './components/AddSong';
import Footer from './components/Footer';
import PlaylistList from './components/PlaylistList';
import AddPlaylist from './components/AddPlaylist';

function App() {
  const initialPlaylistCollection: PlaylistType[] = [
    { name: 'Default', tracks: tracks }
  ];

  // Playlist Collection
  const [playlistCollection, setPlaylistCollection] = useState<PlaylistType[]>(initialPlaylistCollection);

  // Update playlist array
  const updatePlaylistCollection = (newPlaylist: PlaylistType) => {
    setPlaylistCollection(current => [...current, newPlaylist]);
  };

  // Individual songs
  const [songs, setSongs] = useState<Track[]>(tracks);

  // Update playlist with new song 
  const onPlaylistChange = (newSong: Track) => {
    setSongs(current => [...current, newSong]);
  };

  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
      <Header />
      <AddPlaylist 
        setPlaylist={updatePlaylistCollection}
      />
      <PlaylistList 
        setPlaylistCollection={setPlaylistCollection} 
        playlistCollection={playlistCollection} 
      />
      <AddSong 
        changePlaylist={onPlaylistChange} 
        songs={songs}
      />
      <SongList playList={songs}/>
      <Footer/>
    </div>
  );
}

export default App;
