import React from 'react'
import { defaultTracks } from '../assets/tracks'
import { Track } from '../assets/types'
import Song from './Song'

type PlayListProps = {
  playList : Track[]
}

const trackMapper = (playlist: Track[]) => {
  return playlist.map((track, index) => <Song key={index} track={track} />);
};

export default function SongList({ playList } : PlayListProps) {
  return (
    <div className='playlist-container flex flex-col items-left w-1/2 max-w-md'>
      {trackMapper( playList )}
    </div>
  )
}