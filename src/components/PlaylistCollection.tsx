import Playlist from './Playlist';
import {PlaylistCollectionProps } from '../assets/types';

const playlistMapper = ({ playlistCollection, setCurrentPlaylist, removePlaylist }: PlaylistCollectionProps) => {
  function changePlaylist(key : number) {
    setCurrentPlaylist(playlistCollection[key])
  }
  
  if (!Array.isArray(playlistCollection)) {
    console.error('playlistCollection is not an array:', playlistCollection);
    return [];
  } else if (playlistCollection.length === 0) {
    return <h3>No playlists</h3>
  } else
    return playlistCollection.map((playlist, index) => (
      <li className='hover:cursor-pointer w-full flex-row justify-between flex px-2 hover:bg-gunmetal rounded-md' key={index} onClick={() => changePlaylist(index)}>
        <Playlist removePlaylist={removePlaylist} index={index} playlist={playlist}/>
      </li>
  ));
};

export default function PlaylistCollection({ playlistCollection, setCurrentPlaylist, currentPlaylist, removePlaylist }: PlaylistCollectionProps) {
  return (
    <div className='w-full'>
      <h3 className='font-semibold text-2xl'>My Playlists</h3>
      <ul className='rounded-md overflow-y-auto min-h-44 max-h-72 my-1'>
        {playlistMapper({ playlistCollection, setCurrentPlaylist, currentPlaylist, removePlaylist })}
      </ul>
    </div>
  );
}
