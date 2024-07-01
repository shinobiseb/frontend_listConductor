import { SetStateAction, Dispatch} from 'react'
import { PlaylistProps, PlaylistType } from '../assets/types'
import { RiDeleteBin7Line } from "react-icons/ri";

export default function Playlist( {playlist, removePlaylist, index} : PlaylistProps ) {
  
  return (
    <>
      <h3 className='text-xl py-3 truncate'>{playlist.name}</h3>
      <button 
      className='p-2'
      onClick={()=> removePlaylist(index)}
      > <RiDeleteBin7Line />
      </button>
      
    </>
  )
}