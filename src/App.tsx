import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'
import Header from './components/Header'
import AddSong from './components/AddSong'
import Footer from './components/Footer'



function App() {
  
  const [playlist, setPlaylist] = useState(tracks)

  let testPlaylist : Object = []

  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
        <Header/>
        <AddSong 
        changePlaylist={setPlaylist} 
        songs={testPlaylist}
        />
        <SongList playList={playlist}/>
        <Footer/>
    </div>
    
  )
}

export default App