import React from 'react'
import { Track } from '../assets/tracks'



export default function Song(props : any) {
  return (
    <div className='song-info'>

        <h1> {props.title} </h1>
        <h2> {props.artist} </h2>
        <h1> {props.duration} </h1>
        <h1> {props.link} </h1>
    </div>
  )
}
