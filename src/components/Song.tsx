import React from 'react'
import { defaultTracks } from '../assets/tracks'
import { Track, SongProps } from '../assets/types'

// Minutes Calculator
const minCalc = (duration: number) => {
  const min = Math.floor(duration / 60);
  return min;
}

// Seconds Calculator 
const secCalc = (duration: number) => {
  const sec = Math.floor(duration % 60);
  return sec < 10 ? `0${sec}` : sec;
}

export default function Song({ track }: SongProps) {
  function imgHelper(track: Track) {
    if (typeof track.img === 'string') {
      return track.img;
    }
    return ''; // Return a default value or an empty string if not a string
  }

  return (
    <li className='song-container w-full flex flex-row justify-between px-4 py-2 text-white hover:cursor-pointer hover:bg-gunmetal' onClick={() => {
      console.log('li onClick works')
    }}>
      <div className="song-info-div-song flex flex-row justify-center items-center">
        <img className='h-16 aspect-square' src={imgHelper(track)} alt="Song Image" />
        <div className="song-info flex flex-col pl-2">
          <h1 className='text-lg'> {track.title} </h1>
          <h2 className='italic text-sm'> {track.artist} </h2>
        </div>
      </div>
      {/* Song Stats and Numbers */}
      <div className="song-stats flex items-center">
        <h2>
          {typeof track.duration === "number" 
            ? `${minCalc(track.duration)}:${secCalc(track.duration)}` 
            : 'Invalid duration'}
        </h2>
      </div>
    </li>
  )
}
