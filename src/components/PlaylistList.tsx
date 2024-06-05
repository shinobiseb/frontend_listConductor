import React from 'react'
import Playlist from './Playlist';
import { PlaylistType, PlaylistCollectionProps } from '../assets/types';



const playlistMapper = (playlistCollection: PlaylistType[]) => {
  return playlistCollection.map((playlist, index) => (
    <Playlist key={index} playlist={playlist} />
  ));
};

export default function PlaylistCollection({ playlistCollection }: PlaylistCollectionProps) {
  return (
    <div className='h-full w-full border border-white'>
      {playlistMapper(playlistCollection)}
    </div>
  );
}
