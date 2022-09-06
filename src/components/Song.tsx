import React from 'react'
import { Track } from '../assets/tracks'

type SongProps = {
  track : Track;
}

export default function Song({ track } : SongProps){

  return (
    <div className='song-container flex flex-col mt-4 bg-light-blue rounded-md p-2'>
        <h1 className='text-lg'> {track.title} </h1>
        <h2> {track.artist} </h2>
        <h1> {track.duration} </h1>
        <h1> {track.link} </h1>
    </div>
  )
}
