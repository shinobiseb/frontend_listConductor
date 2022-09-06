import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'

function App() {


  return (
    <div className="App flex flex-column w-full h-full">
        <SongList playList={tracks} />
    </div>
  )
}

export default App