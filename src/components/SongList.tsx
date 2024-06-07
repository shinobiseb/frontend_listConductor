import React from 'react'
import { defaultTracks } from '../assets/tracks'
import { Track } from '../assets/types'
import Song from './Song'
import { PlayListProps } from '../assets/types'


const trackMapper = (playlist: Track[]) => {
  return playlist.map((track, index) => (
        <Song key={index} track={track}/>
    )
  );
};

export default function SongList({ tracklist } : PlayListProps) {
  return (
    <ul className='playlist-container h-3/4 flex flex-col items-left w-full overflow-y-scroll'>
      {trackMapper( tracklist )}
    </ul>

  )
}