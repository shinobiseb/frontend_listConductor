import React, { useState, useRef} from 'react'

export default function AddSong() {

  const [title, setTitle] = useState("")

  const [artist, setArtist] = useState("")

  const titleInput = useRef(null)

  const artistInput = useRef(null)

  const isInput = (ele : any) => {
    if(!ele.current) {
      console.warn(`Missing ${ele} element!`);
      return;
    }
    const Element: any = ele.current
    if (Element instanceof HTMLInputElement === false) {
      console.warn(`Got the wrong Element for ${ele}!`)
      return
    } else {
      console.log(ele.current.value)
    }
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
            }
        }
        ref={artistInput}
        />
        <button 
        className='button rounded-lg bg-light-blue p-2 hover:ease-in duration-250'
        onClick={() => {
          isInput(titleInput)
          isInput(artistInput)
        }}
        > 
        Add New Song
        </button>
    </div>
  )
}
