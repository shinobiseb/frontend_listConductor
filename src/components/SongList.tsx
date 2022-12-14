import React from 'react'
import { Track, tracks } from '../assets/tracks'
import Song from './Song'

type PlayListProps = {
  playList : Track[]
}

const trackMapper = (playlist: Track[]) => {
  let num = -1;
  const forE = playlist.map((track) => {
    num = num + 1;
    return <Song key={num} track={track} />;
  });
  return forE;
};

export default function SongList({ playList } : PlayListProps) {
  return (
    <div className='playlist-container flex flex-col items-left w-1/2 max-w-md'>
      {trackMapper( playList )}
    </div>
  )
}


{/* <Song track={playList[0]}/> */}