import React from 'react'
import { Track, tracks } from '../assets/tracks'
import Song from './Song'

type PlayListProps = {
  playList : Track[]
}

export default function SongList({ playList } : PlayListProps) {
  return (
    <div className='playlist-container flex flex-col items-left w-1/2'>
        <Song 
        track={playList[0]}
        />
        <Song 
        track={playList[1]}
        />
        <Song 
        track={playList[2]}
        />
        <Song 
        track={playList[3]}
        />
    </div>
  )
}
