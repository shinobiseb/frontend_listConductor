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
        className='button'
        onClick={() => setOpen(!openState)}
      >
        Add Song
      </button>
    );
  }
  return null;
};

export default OpenAddSong;