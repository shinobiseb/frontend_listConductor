import { useState } from 'react'
import { tracks , Track, Tracklist } from './assets/tracks'
import SongList from './components/SongList'
import Header from './components/Header'
import AddSong from './components/AddSong'
import Footer from './components/Footer'
import PlaylistList from './components/PlaylistList'
import AddPlaylist from './components/AddPlaylist'



function App() {

  let playArr : Tracklist[] = []

  //playlists as a whole
  const [playlists, setPlaylists] = useState(playArr)

  const updatePlaylist = (newPlaylist: Tracklist) => {
    setPlaylists(current => [...current, newPlaylist]);
  };

  //individual songs
  const [songs, setSongs] = useState(tracks)

  const onPlaylistChange = (newSong: Track) => {
    setSongs(current => [...current, newSong]);
  };

  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
        <Header/>
        <AddPlaylist 
        setPlaylist={updatePlaylist}
        playlists={playlists}
        />
        <PlaylistList 
        setPlay={setPlaylists} 
        playlistList={playArr}/>
        <AddSong 
        changePlaylist={onPlaylistChange} 
        songs={songs}
        />
        <SongList playList={songs}/>
        <Footer/>
    </div>
    
  )
}

export default App