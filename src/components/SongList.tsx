import React from 'react'
import Song from './Song'
import { tracks } from '../assets/tracks'

export default function SongList(props : Array) {
  return (
    <div>
        <Song props={tracks[0]}/>
    </div>
  )
}
