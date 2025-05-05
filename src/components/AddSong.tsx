import { useState} from 'react'
import { AddSongProps } from '../assets/types'
import SearchResult from './SearchResult';
import { SpotifyTrack } from '../assets/types';

export default function AddSong({ addSongToPlaylist, currentPlaylist, openBool, token }: AddSongProps) {

  /*--------------SONG STATES-------------*/
  const [searchedSong, setSearchedSong] = useState("")
  const [songs, setSongs] = useState([])
  const [ showModal, setShowModal ] = useState(false)

  const handleChange = (event : any) => {
    setSearchedSong(event.target.value)
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
    } catch (error) {
      console.log(error);
    }
  }

  const showExistsModal = () => {
    setShowModal(true)
    setTimeout(()=> setShowModal(false), 1500)
    return
  }

  const songInPlaylistChecker = ( selectedSong : SpotifyTrack ) => {
    if(!currentPlaylist){
      console.error("Current Playlist null")
      return
    }
    
    for( let i = 0; i < currentPlaylist.tracks.length; i++) {
      if( selectedSong.uri === currentPlaylist.tracks[i].uri){
        return true
      } else {
        return false
      }
    }
  }

  const handleAddSong = (selectedSong: SpotifyTrack) => {
    if(songInPlaylistChecker(selectedSong)){
      console.log("Song is Already in playlist")
      showExistsModal()
      setSongs([])
      setSearchedSong("")
      return
    }
    addSongToPlaylist(selectedSong);
    setSongs([])
    setSearchedSong("")
  };

  function mapResults(songs : SpotifyTrack[]) {
    return songs.map((result : Object, index: number) => (
      <li key={index} onClick={()=>
        handleAddSong(songs[index])
      }>
        <SearchResult name={songs[index].name} artists={songs[index].artists}/>
      </li>
    ));
  }


  if(!openBool) {
    return null
  }
    return (
      <div className='relative items-center w-full px-1'>
        <div className='w-full flex '>
          { showModal ? 
            <div className='z-10 absolute inset-0 flex items-center justify-center bg-orange p-2'>
              Song Already within playlist!
            </div> : 
            null
          }
          <input 
          id='searchBar'
          className='rounded-md p-2 w-full'
          value={searchedSong}
          onChange={handleChange} 
          type="text" 
          placeholder='Search Song'
          onKeyDown={(e) => {
            if (e.key === "Enter")
                search();
            }}
          // ref={searchInput}
          />
            <button 
            id='AddSongButton'
            className='button hover:ease-in ml-2 duration-150 relative'
            // ref={searchButtonInput}
            onClick={() => {
              search()
            }}>
            Confirm
          </button>
        </div>
        <ul id='SongResultDiv' className='absolute bg-white w-full overflow-y-auto max-h-48 rounded-md mt-[2px] shadow-md overflow-hidden'>
            {mapResults(songs)}
        </ul>
        
      </div>
    )
}
