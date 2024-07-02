import React from 'react'
import { IoIosAdd } from "react-icons/io";

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
        <IoIosAdd/>
      </button>
    );
  }
  return null;
};

export default OpenAddSong;