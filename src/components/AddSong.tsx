import React, { useState } from 'react'

const [title, setTitle] = useState("test")

export default function AddSong() {
  return (
    <div className='flex flex-row w-3/4 justify-between'>
        <input 
        id="text-box-handle" className="rounded-lg p-2" 
        type="text" 
        placeholder='Title'
        onChange={event => 
            setTitle(event.target.value)
        }
        />

        <input 
        className="rounded-lg p-2"
        type="text"  
        placeholder='Artist'
        />

        <button 
        className='button rounded-lg bg-light-blue p-2 hover:ease-in duration-250'
        
        > 
        Add New Song 
        </button>
    </div>
  )
}
