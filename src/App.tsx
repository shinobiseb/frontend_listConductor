import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'
import Header from './components/Header'

function App() {


  return (
    <div className="App font-sans bg-light-purple flex flex-col w-full h-screen items-center">
        <Header/>
        <SongList playList={tracks} />
    </div>
    
  )
}

export default App