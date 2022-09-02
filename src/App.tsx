import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'

function App() {


  return (
    <div className="App">
      <div>
        <SongList playList={tracks} />
      </div>
    </div>
  )
}

export default App