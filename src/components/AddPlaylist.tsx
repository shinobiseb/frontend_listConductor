import React from 'react'
import { Tracklist } from '../assets/tracks'

type addPlayProps = {
    setPlaylist: (newPlay: Tracklist) => void;
}

function newPlaylist(setPlaylist : addPlayProps) {
  setPlaylist
}

export default function AddPlaylist( { setPlaylist } : addPlayProps) {
  return (
    <div>
        <button 
        className="addPlay flex button rounded-lg bg- p-2 hover:ease-in duration-250 w-3/4 bg-white-white mb-2"
        onClick={() => {
          newPlaylist
        }}
        >
            Add playlist
        </button>
    </div>
  )
}
