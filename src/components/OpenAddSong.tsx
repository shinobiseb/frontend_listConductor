import React from 'react'
import { useStateFunction } from '../assets/types'

interface OpenAddSongProps {
  openState: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenAddSong: React.FC<OpenAddSongProps> = ({ openState, setOpen }) => {
  if (!openState) {
    return (
      <button
        className='hover:bg-orange text-md flex bg-white items-center justify-center px-3 py-2 text-center rounded-md m-2'
        onClick={() => setOpen(!openState)}
      >
        Add Song
      </button>
    );
  }
  return null;
};

export default OpenAddSong;