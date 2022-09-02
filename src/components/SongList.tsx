import React from 'react'
import { tracks } from '../assets/tracks'
import Song from './Song'


export default function SongList(props : any) {
  return (
    <div>
        <Song props={props[0]}/>
    </div>
  )
}
