import React from 'react'
import { Track, tracks } from '../assets/tracks'
import Song from './Song'

type PlayListProps = {
  playList : Track[]
}

export default function SongList({ playList } : PlayListProps) {
  return (
    <div>
        <Song 
        track={playList[0]}
        />
    </div>
  )
}
