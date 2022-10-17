import React from 'react'
import { Tracklist } from "../assets/tracks"
import Playlist from './Playlist';



type playlistListProps = {
    playlistList : Tracklist[]
    setPlay: (newPlay: Tracklist[]) => void;
}

const trackMapper = ({ playlistList }: playlistListProps) => {
  let num = -1;
  const forE = playlistList.map((playlist) => {
    num = num + 1;
    // return <Playlist key={num} playlist={playlist} />;
  });
  return forE;
};

export default function PlaylistList({ playlistList, setPlay }: playlistListProps) {

  return (
    <div>

    </div>

    
  )
}
