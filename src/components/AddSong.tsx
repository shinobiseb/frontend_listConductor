import React, { useState, useRef} from 'react'
import { AddSongProps, songSearchResults } from '../assets/types'
import { IoIosAdd } from "react-icons/io";
import SearchResult from './SearchResult';

export default function AddSong({ addSongToPlaylist, openBool, setOpen, token }: AddSongProps) {

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

  const searchInput = useRef(null)

  const booleanHelper = (bool : string) => bool === "false" ? false : true;


  /*--------------SONG STATES-------------*/
  const [searchedSong, setSearchedSong] = useState("")
  const [songs, setSongs] = useState([])

  const handleChange = (event : any) => {
    setSearchedSong(event.target.value)
  }

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

  //---- Search Function -----
  async function search() {
    if(!searchedSong) {
      console.log('No Searched Song')
      return
    }

    console.log(`Searching for ${searchedSong}`);

    let artistParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    
    try {
      let response = await fetch(`https://api.spotify.com/v1/search?q=${searchedSong}&type=track`, artistParams);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      let searchedSongs = data.tracks.items
      setSongs(searchedSongs)
      console.table(searchedSongs)
    } catch (error) {
      console.log(error);
    }
  }

  function mapResults(songs : songSearchResults[]) {
    return songs.map((result : Object, index: number) => (
      <li key={index}>
        <SearchResult name={songs[index].name} artists={songs[index].artists}/>
      </li>
    ));
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
      isAgeRestricted: booleanHelper('age'),
      img: isInput(imgInput)
    };
  }

  if(!openBool) {
    return null
  }
      return (
        <div className='relative items-center w-3/4'>
          <div className='w-full flex '>
            <input 
            className='rounded-md p-2 w-full'
            value={searchedSong}
            onChange={handleChange} 
            type="text" 
            placeholder='Search Song'
            ref={searchInput}
            />
              <button 
              id='AddSongButton'
              className='button hover:ease-in duration-250 relative'
              onClick={() => {
                // let theNewSong = getNewSong();
                // addSongToPlaylist(theNewSong);
                // setOpen(!openBool)
                search()
              }}>
              Confirm
            </button>
          </div>
          <ul className='absolute bg-white w-full overflow-y-auto max-h-48 rounded-md mt-[2px] shadow-md overflow-hidden'>
              {mapResults(songs)}
          </ul>
          
        </div>
      )
    }
