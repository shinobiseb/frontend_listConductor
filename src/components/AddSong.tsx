import React, { useState, useRef} from 'react'
import {Track, Metrics, VoteData} from "../assets/tracks"

export default function AddSong() {

  const [currentSong, setSong] = useState <Track | null>({
      artist: "",
      title: "",
      duration: 0,
      link: "",
      info: {
        scoreData: {
          likes: 0,
          dislikes: 0,
        },
        views: 0,
        uploadedOn: new Date(1999),
      },
      isAgeRestricted: false,
  })

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

  const [age, setAge] = useState("false")

  const booleanHelper = (bool : string) => {
    if (bool === "false") {
      return false
    } else {
      return true
    }
  }

  const handleChange = (event : any) => {
    setAge(event.target.value)
  }


  //type narrowing => catch html element errors
  const isInput = (ele : any) => {
    const checker = (ele : any) => {
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

    if (checker === null || false) {
      return ele.current.value
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
        className="rounded-lg p-2 mt-1"
        type="text"  
        placeholder='Artist'
        ref={artistInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="number"  
        placeholder='duration'
        ref={durationInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="url"  
        placeholder="https://youtube.com/example"
        ref={linkInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="number"  
        placeholder='likes'
        ref={likesInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="number"  
        placeholder='dislikes'
        ref={dislikesInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="number"  
        placeholder='views'
        ref={viewsInput}
        />

        <input 
        className="rounded-lg p-2 mt-1"
        type="date"  
        placeholder='upload Dated'
        ref={uploadedInput}
        />
        
        <div className='mt-1 p-2'>
          <label> Age Restricted?</label>
          <select 
          name="ageRestricted" 
          id="ageRestricted" 
          required 
          value={age} 
          onChange={handleChange} 
          ref={ageInput}
          className="rounded-md ml-2"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button 
        className='button rounded-lg bg-light-blue p-2 hover:ease-in duration-250'
        onClick={() => {
          setSong({
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
                })

          console.log(currentSong)
          }
        }
        > 
        Add New Song
        </button>
    </div>
  )
}
