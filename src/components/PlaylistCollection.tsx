import Playlist from './Playlist';
import {PlaylistCollectionProps } from '../assets/types';

const playlistMapper = ({ playlistCollection, setCurrentPlaylist, removePlaylist }: PlaylistCollectionProps) => {
  
  function changePlaylist(key : number) {
    setCurrentPlaylist(playlistCollection[key])
  }
  
  if (!Array.isArray(playlistCollection)) {
    console.error('playlistCollection is not an array:', playlistCollection);
    return [];
  }
    return playlistCollection.map((playlist, index) => (
      <li className='w-full flex-row justify-between flex' key={index} onClick={() => changePlaylist(index)}>
        <Playlist removePlaylist={removePlaylist} index={index} playlist={playlist}/>
      </li>
  ));
};

export default function PlaylistCollection({ playlistCollection, setCurrentPlaylist, currentPlaylist, removePlaylist }: PlaylistCollectionProps) {
  return (
    <div className='h-1/3 w-full'>
      <h3 className='font-semibold text-2xl'>My Playlists</h3>
      <ul className='mt-7 rounded-md h-72 overflow-y-auto'>
        {playlistMapper({ playlistCollection, setCurrentPlaylist, currentPlaylist, removePlaylist })}
      </ul>
    </div>
  );
}
