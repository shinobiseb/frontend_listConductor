import React from 'react'
import { defaultTracks } from '../assets/tracks'
import { Track, SongProps } from '../assets/types'


//Minutes Calculator
const minCalc= (duration : number) => {
  const min = Math.floor(duration/60000)
  return min
}

//Seconds Calculator 
const secCalc= (duration : number) => {
  const sec = Math.floor(duration/1000) % 60
  if (sec < 10) {
    return `0${sec}`
  } else {
    return sec
  }
}

export default function Song({ track } : SongProps){

  return (
    <li className='song-container w-full flex flex-row justify-between px-4 py-2 text-white' onClick={()=> {
      
    }}>
      <div className="song-info-div-song flex flex-row justify-center items-center">
        <img className='h-16 aspect-square' src={track.img} alt="Song Image"/>
        <div className="song-info flex flex-col pl-2">
          <h1 className='text-lg'> {track.title} </h1>
          <h2 className='italic text-sm'> {track.artist} </h2>
          {/* <a target='_blank' className='text-sm italic' href={track.link}>Youtube Link</a> */}
        </div>
      </div>
      {/* Song Stats and Numbers */}
      <div className="song-stats flex items-center">
        <h2> {minCalc(track.duration)}:{secCalc(track.duration)}</h2>
      </div>
    </li>
  )
}
