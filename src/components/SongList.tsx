import React from 'react'
import { Track, tracks } from '../assets/tracks'
import Song from './Song'


export default function SongList(props : Track[]) {
  return (
    <div>
        <Song 
        track={props[0]}
        />
    </div>
  )
}
