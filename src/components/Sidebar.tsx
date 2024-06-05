import React from 'react'
import PlaylistCollection from './PlaylistList'
PlaylistCollection
import {  defaultTracks } from '../assets/tracks'
import Playlist from './Playlist'
import { PlaylistType, sidebarReq } from '../assets/types'

const playlistMapper = (playlistCollection: PlaylistType[]) => {
  return playlistCollection.map((playlist, index) => (
    <li>
      <Playlist key={index} playlist={playlist} />
    </li>
  ));
}

  export default function Sidebar({ userPlaylists, userName }: sidebarReq) {
    return (
      <main className='sm:h-full w-full sm:w-1/3 bg-gray p-2 rounded-md'>
        <h3 className='text-sm text'>{userName}</h3>
        <ul className='hidden sm:flex'>
          {playlistMapper(userPlaylists)}
        </ul>
      </main>
    );
}
