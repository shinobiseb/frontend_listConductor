import { SetStateAction, Dispatch} from 'react'
import { PlaylistType } from '../assets/types'

type playlistProps = {
    playlist : PlaylistType
    // setPlay : Dispatch<SetStateAction<any>>
}

export default function Playlist( playlistCollection : playlistProps ) {
  
  return (
    <>
      <h3 className='text-xl hover:cursor-pointer hover:text-light-blue py-2'>{playlistCollection.playlist.name}</h3>
    </>
  )
}