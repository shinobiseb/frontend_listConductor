import React, { useState, useRef} from 'react'

export default function AddSong() {

    const [title, setTitle] = useState("")

    const [artist, setArtist] = useState("")

    const titleInput = useRef(null)

    const submitTitle = () => {
      console.log(titleInput.current.value)
    }

  return (
    <div className='flex flex-row w-3/4 justify-between'>
        <input 
        id="text-box-handle" className="rounded-lg p-2" 
        type="text" 
        placeholder='Title'
        value={title}
        onChange={event => {
            setTitle(event.target.value)
            }
        }
        ref={titleInput}
        />

        <input 
        className="rounded-lg p-2"
        type="text"  
        placeholder='Artist'
        value={artist}
        onChange={event => {
            setArtist(event.target.value)
            console.log(artist)
            }
        }
        />
        <button 
        className='button rounded-lg bg-light-blue p-2 hover:ease-in duration-250'
        onClick={submitTitle}
        > 
        Add New Song 
        </button>
    </div>
  )
}
