import { SetStateAction, Dispatch} from 'react'
import { PlaylistType } from '../assets/types'
import {playlistProps} from '../assets/types'
import { RiDeleteBin7Line } from "react-icons/ri";

export default function Playlist( {playlist, removePlaylist, index} : playlistProps ) {
  
  return (
    <>
      <h3 className='text-xl py-3'>{playlist.name}</h3>
      <button 
      className='p-2'
      onClick={()=> removePlaylist(index)}
      > <RiDeleteBin7Line />
      </button>
      
    </>
  )
}