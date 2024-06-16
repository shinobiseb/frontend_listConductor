import { SetStateAction, Dispatch} from 'react'
import { PlaylistType } from '../assets/types'
import {playlistProps} from '../assets/types'

export default function Playlist( {playlist} : playlistProps ) {
  
  return (
    <>
      <h3 className='text-xl hover:cursor-pointer hover:text-light-blue py-2'>{playlist.name}</h3>
    </>
  )
}