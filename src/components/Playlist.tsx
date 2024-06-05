import React from 'react'
import { PlaylistType } from '../assets/types'

type playlistProps = {
    playlist : PlaylistType
}

export default function Playlist( playlistCollection : playlistProps ) {
  
  return (
    <div className='playlist'>
      <h1>{playlistCollection.playlist.name}</h1>
    </div>
  )
}