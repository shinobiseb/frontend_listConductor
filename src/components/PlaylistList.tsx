import React from 'react'
import { PlaylistType } from "../assets/tracks"
import Playlist from './Playlist';

type PlaylistCollectionProps = {
    playlistCollection: PlaylistType[];
    setPlaylistCollection: (newPlaylistCollection: PlaylistType[]) => void;
}

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
