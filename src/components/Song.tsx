import React from 'react'
import { Track, tracks } from '../assets/tracks'

type SongProps = {
  track : Track;
}

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
    <div className='song-container flex flex-row justify-between mt-1 bg-light-blue rounded-md p-2'>
      {/* Song Title and Artist */}
      <div className="song-info">
        <h1 className='text-lg'> {track.title} </h1>
        <h2 className='italic text-sm'> {track.artist} </h2>
      </div>
      {/* Song Stats and Numbers */}
      <div className="song-stats flex items-center">
        <h2> {minCalc(track.duration)}:{secCalc(track.duration)}</h2>
      </div>
    </div>
  )
}
