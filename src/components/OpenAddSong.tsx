import React, { Dispatch, SetStateAction } from 'react'
import { useStateFunction } from '../assets/types'

export default function OpenAddSong( {openState, setOpen} : useStateFunction ) {
  
  if(!openState)
    return (
    <button className=' hover:bg-orange text-md flex bg-white items-center justify-center px-3 py-2 text-center rounded-md m-2'
    onClick={()=> setOpen(!openState)}
    >
        Add Song
    </button>
  )
}
