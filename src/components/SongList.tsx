import React from 'react';
import { Track } from '../assets/types';
import Song from './Song';
import { SongListProps } from '../assets/types';

const trackMapper = (playlist: Track[]) => {

  if (!Array.isArray(playlist)) {
    console.error('playlist is not an array:', playlist);
    return [];
  }

  return playlist.map((track, index) => (
    <Song key={index} track={track}/>
  ));
};

export default function SongList({ tracklist }: SongListProps) {
  return (
    <ul className='playlist-container h-3/4 flex flex-col items-left w-full overflow-y-scroll'>
      {trackMapper(tracklist)}
    </ul>
  );
}
