import React from 'react'
import { PlaylistType, Tracklist } from '../assets/tracks'

type playlistProps = {
    playlist : PlaylistType
}

export default function Playlist( playlistCollection : playlistProps ) {
  
  return (
    <div>
      <h1>{playlistCollection.playlist.name}</h1>
    </div>
  )
}