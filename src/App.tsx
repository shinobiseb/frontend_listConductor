import { useState } from 'react'
import { tracks } from './assets/tracks'
import SongList from './components/SongList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <SongList className="songList"/>
      </div>
    </div>
  )
}

export default App