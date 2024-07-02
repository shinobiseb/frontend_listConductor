import PlaylistCollection from './PlaylistCollection';
import { SidebarProps } from '../assets/types';
import AddPlaylist from './AddPlaylist';
import { AiFillHome } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

export default function Sidebar({ userPlaylists, removePlaylist, updatePlayColl, setCurrentPlaylist, currentPlaylist }: SidebarProps) {

  const [bigWindow, setBigWindow] = useState(false);
  const [open, setOpen] = useState(false);

  function trackWidth() {
    return window.innerWidth;
  }

  function handleResize() {
    if (trackWidth() >= 640) {
      setBigWindow(true);
    } else {
      setBigWindow(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (bigWindow) {
    return (
      <main className='p-2 w-full sm:h-full sm:w-1/2 md:w-1/3 bg-gray rounded-md sm:p-4 text-white overflow-y-auto'>
        <h1 className='text-xl sm:text-3xl font-semibold'>ListConductor</h1>
        <h3 className='sm:text-lg font-semibold my-2'>UserName</h3>
        <ul className='flex flex-col sm:h-54 font-semibold mb-10'>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <AiFillHome />
                <p className='ml-2'>HOME</p>
              </span>
            </a>
          </li>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <RiPlayList2Fill />
                <p className='ml-2'>PLAYLISTS</p>
              </span>
            </a>
          </li>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <FaPhone />
                <p className='ml-2'>CONTACT</p>
              </span>
            </a>
          </li>
        </ul>
        <PlaylistCollection 
          currentPlaylist={currentPlaylist} 
          setCurrentPlaylist={setCurrentPlaylist} 
          playlistCollection={userPlaylists}
          removePlaylist={removePlaylist}
        />
        <AddPlaylist addPlaylistToCollection={updatePlayColl}/>
      </main>
    );
  } else if (!bigWindow && !open) {
    return (
      <main className='p-2 w-full sm:h-full sm:w-1/2 md:w-1/3 bg-gray rounded-md sm:p-4 text-white overflow-hidden flex flex-row justify-between items-center'>
        <h1 className='text-xl sm:text-3xl font-semibold'>ListConductor</h1>
        <button onClick={() => setOpen(!open)} className="hamburger-button"><RxHamburgerMenu/></button>
      </main>
    );
  } else if (!bigWindow && open) {
    return (
      <main className='p-2 w-full h-full sm:w-1/2 md:w-1/3 bg-gray rounded-md sm:p-4 text-white'>
        <h1 className='text-xl sm:text-3xl font-semibold'>ListConductor</h1>
        <h3 className='sm:text-lg font-semibold my-7'>UserName</h3>
        <ul className='flex flex-col sm:h-54 font-semibold mb-10'>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <AiFillHome />
                <p className='ml-2'>HOME</p>
              </span>
            </a>
          </li>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <RiPlayList2Fill />
                <p className='ml-2'>PLAYLISTS</p>
              </span>
            </a>
          </li>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <FaPhone />
                <p className='ml-2'>CONTACT</p>
              </span>
            </a>
          </li>
        </ul>
        <PlaylistCollection 
          currentPlaylist={currentPlaylist} 
          setCurrentPlaylist={setCurrentPlaylist} 
          playlistCollection={userPlaylists}
          removePlaylist={removePlaylist}
        />
        <AddPlaylist addPlaylistToCollection={updatePlayColl}/>
      </main>
    );
  } else {
    return null
  }
}
