import { useState } from 'react'
import { tracks , Track } from './assets/tracks'
import SongList from './components/SongList'
import Header from './components/Header'
import AddSong from './components/AddSong'
import Footer from './components/Footer'
import PlaylistList from './components/PlaylistList'



function App() {
  
  const [playlist, setPlaylist] = useState(tracks)

  const onPlaylistChange = (newSong: Track) => {
    setPlaylist(current => [...current, newSong]);
  };

  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
        <Header/>
        <PlaylistList/>
        {/* <AddSong changePlaylist={onPlaylistChange} songs={playlist} />
        <SongList playList={playlist}/> */}
        <Footer/>
    </div>
    
  )
}

export default App