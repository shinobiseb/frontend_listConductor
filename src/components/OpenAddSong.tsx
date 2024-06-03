import React, { Dispatch, SetStateAction } from 'react'

interface useStateFunction {
    setOpen : Dispatch<SetStateAction<boolean>>
    openState : boolean
}

export default function OpenAddSong( {openState, setOpen} : useStateFunction ) {
  return (
    <button className='text-md flex bg-light-blue items-center justify-center px-3 py-2 text-center rounded-md m-2'
    onClick={()=> setOpen(!openState)}
    >
        Add New Song
    </button>
  )
}
