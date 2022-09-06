import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'

function App() {


  return (
    <div className="App flex flex-column w-full h-full">
        <SongList playList={tracks} />
        <h1>test</h1>
    </div>
    
  )
}

export default App