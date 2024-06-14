import React, { useState, useRef} from 'react'
import { AddSongProps } from '../assets/types'

export default function AddSong({ addSongToPlaylist, openBool, setOpen }: AddSongProps) {

  //Input Checkers
  const titleInput = useRef(null)
  const artistInput = useRef(null)
  const durationInput = useRef(null)
  const linkInput = useRef(null)
  const likesInput = useRef(null)
  const dislikesInput = useRef(null)
  const viewsInput = useRef(null)
  const uploadedInput = useRef(null)
  const ageInput = useRef(null)
  const imgInput = useRef(null)

  const [age, setAge] = useState("false")

  const booleanHelper = (bool : string) => bool === "false" ? false : true;

  const handleChange = (event : any) => {
    setAge(event.target.value)
  }

  //type narrowing => catch html element errors
  const isInput = (ele : any) => {
    if(!ele.current) {
      console.warn(`Missing ${ele} element!`);
      return;
    }
    const Element: any = ele.current
    if(Element instanceof HTMLInputElement === false) {
      console.warn(`Got the wrong Element for ${ele}!`)
      return
    }
    if(ele.current.value === "") {
      return `Value not given`
    }
    return ele.current.value
  }


  function getNewSong() {
    return {
      artist: isInput(artistInput),
      title: isInput(titleInput),
      duration: isInput(durationInput),
      link: isInput(linkInput),
      info: {
        scoreData: {
          likes: isInput(likesInput),
          dislikes: isInput(dislikesInput),
        },
        views: isInput(viewsInput),
        uploadedOn: isInput(uploadedInput),
      },
      isAgeRestricted: booleanHelper(age),
      img: isInput(imgInput)
    };
  }

  if(!openBool) {
    return null
  }
      return (
        <div className='flex flex-col w-3/4 justify-center items-center'>
            <button
            className='button hover:bg-orange bg-white-blue mb-2 rounded-lg p-2 hover:ease-in duration-250 w-40 bg-white-white'
            onClick={()=> setOpen(!openBool)}
            >Close
            </button>
            <input 
            id="text-box-handle" className="rounded-lg p-2 w-3/4" 
            type="text" 
            placeholder='Title'
            ref={titleInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="text"  
            placeholder='Artist'
            ref={artistInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="number"  
            placeholder='duration'
            ref={durationInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="url"  
            placeholder="https://youtube.com/example"
            ref={linkInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="number"  
            placeholder='likes'
            ref={likesInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="number"  
            placeholder='dislikes'
            ref={dislikesInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="number"  
            placeholder='views'
            ref={viewsInput}
            />

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="date"  
            placeholder='upload Dated'
            ref={uploadedInput}
            />

            <div className='mt-1 p-1 w-3/4'>
              <label className='text-white'> Age Restricted?</label>
              <select 
              name="ageRestricted" 
              id="ageRestricted" 
              required 
              value={age} 
              onChange={handleChange} 
              ref={ageInput}
              className="rounded-md ml-2 px-2 py-1"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <input 
            className="rounded-lg p-2 mt-1 w-3/4"
            type="text"  
            placeholder='Image'
            ref={imgInput}
            />

            <button 
            className='button hover:bg-orange bg-white-blue mt-2 rounded-lg p-2 hover:ease-in duration-250 w-40 bg-white-white'
            onClick={() => {
              let theNewSong = getNewSong();
              addSongToPlaylist(theNewSong);
              setOpen(!openBool)
            }}>
            Confirm
            </button>
        </div>
      )
    }
