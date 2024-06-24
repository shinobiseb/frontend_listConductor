import PlaylistCollection from './PlaylistCollection'
PlaylistCollection
import { sidebarReq } from '../assets/types'
import AddPlaylist from './AddPlaylist'
import { AiFillHome } from "react-icons/ai";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";


export default function Sidebar({ userPlaylists, removePlaylist, updatePlayColl, setCurrentPlaylist, currentPlaylist }: sidebarReq) {

    return (
      <main className='sm:h-full w-full sm:w-1/2 md:w-1/3 bg-gray rounded-md p-4 text-white overflow-hidden'>
        <h1 className='sm:text-3xl font-semibold'>ListConductor</h1>
        <h3 className='sm:text-lg font-semibold my-7'>UserName</h3>
        <ul className='flex flex-col sm:h-54 font-semibold mb-10'>
          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <AiFillHome/>
                <p className='ml-2'>HOME</p>
              </span>
            </a>
          </li>

          <li className='sm:py-4 hover:bg-gunmetal cursor-pointer px-2'>
            <a className=' items-center' href='#'>
              <span className='flex-row flex items-center'>
                <RiPlayList2Fill/>
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
}
