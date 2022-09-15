import React, { useState, useRef} from 'react'

export default function AddSong() {

  const [currentSong, setSong] = useState({
      artist: "",
      title: "",
      duration: 0,
      link: "",
      info: "",
      isAgeRestricted: false,
  })

  const titleInput = useRef(null)
  const artistInput = useRef(null)
  const durationInput = useRef(null)
  const linkInput = useRef(null)


  //type narrowing => catch html element errors
  const isInput = (ele : any) => {
    if(!ele.current) {
      console.warn(`Missing ${ele} element!`);
      return;
    }
    const Element: any = ele.current
    if (Element instanceof HTMLInputElement === false) {
      console.warn(`Got the wrong Element for ${ele}!`)
      return
    }
  }


  return (
    <div className='flex flex-col w-3/4 justify-between'>
        <input 
        id="text-box-handle" className="rounded-lg p-2" 
        type="text" 
        placeholder='Title'
        ref={titleInput}
        />

        <input 
        className="rounded-lg p-2"
        type="text"  
        placeholder='Artist'
        ref={artistInput}
        />

        <input
        className="rounded-lg p-2"
        type="number"  
        placeholder='duration'
        ref={durationInput}
        />

        <input 
        className="rounded-lg p-2"
        type="text"  
        placeholder='Link'
        ref={linkInput}
        />

        <button 
        className='button rounded-lg bg-light-blue p-2 hover:ease-in duration-250'
        onClick={() => {
          isInput(titleInput)
          isInput(artistInput)
          isInput(durationInput)
        }}
        > 
        Add New Song
        </button>
    </div>
  )
}
