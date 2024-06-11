import React from 'react'
import { useRef } from 'react';
import Playlist from './Playlist';
import { PlaylistType, PlaylistCollectionProps } from '../assets/types';

const playlistMapper = ({ playlistCollection }: PlaylistCollectionProps) => {
  if (!Array.isArray(playlistCollection)) {
    console.error('playlistCollection is not an array:', playlistCollection);
    return [];
  }
    return playlistCollection.map((playlist, index) => (
    <li>
      <Playlist key={index} playlist={playlist}/>
    </li>
  ));
};

export default function PlaylistCollection({ playlistCollection }: PlaylistCollectionProps) {
  return (
    <div className='h-1/3 w-full'>
      <h3 className='font-semibold text-2xl'>My Playlists</h3>
      <ul className='mt-7 rounded-md h-72 overflow-y-auto'>
        {playlistMapper({ playlistCollection })}
      </ul>
    </div>
  );
}
