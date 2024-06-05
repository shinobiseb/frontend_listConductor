import React from 'react'
import PlaylistCollection from './PlaylistList'
PlaylistCollection
import {  defaultTracks } from '../assets/tracks'
import Playlist from './Playlist'
import { PlaylistType, sidebarReq } from '../assets/types'

const playlistMapper = (playlistCollection: PlaylistType[]) => {
  return playlistCollection.map((playlist, index) => (
    <Playlist key={index} playlist={playlist} />
  ));
}

  export default function Sidebar({ userPlaylists, userName }: sidebarReq) {
    return (
      <main className='h-full border-white border'>
        <h3>{userName}</h3>
        {playlistMapper(userPlaylists)}
      </main>
    );
}
