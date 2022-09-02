import React from 'react'
import { Track } from '../assets/tracks'

type SongProps = {
  track : Track;
}

export default function Song({ track } : SongProps){

  return (
    <div className='song-info'>
        <h1> {track.title} </h1>
        <h2> {track.artist} </h2>
        <h1> {track.duration} </h1>
        <h1> {track.link} </h1>
    </div>
  )
}
