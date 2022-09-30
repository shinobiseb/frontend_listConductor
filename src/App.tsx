import { useState } from 'react'
import { tracks , Track, Tracklist } from './assets/tracks'
import SongList from './components/SongList'
import Header from './components/Header'
import AddSong from './components/AddSong'
import Footer from './components/Footer'
import PlaylistList from './components/PlaylistList'



function App() {

  let playArr : Tracklist = []

  //playlists as a whole
  const [playlists, setPlaylists] = useState(playArr)

  //individual songs
  const [songs, setSongs] = useState(tracks)

  const onPlaylistChange = (newSong: Track) => {
    setSongs(current => [...current, newSong]);
  };

  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
        <Header/>
        <PlaylistList playlistList={playArr}/>
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