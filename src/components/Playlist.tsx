import { SetStateAction, Dispatch} from 'react'
import { PlaylistType } from '../assets/types'

type playlistProps = {
    playlist : PlaylistType
    // setPlay : Dispatch<SetStateAction<any>>
}

export default function Playlist( playlistCollection : playlistProps ) {
  
  return (
    <li className='text-xl'>
      <h1>{playlistCollection.playlist.name}</h1>
    </li>
  )
}