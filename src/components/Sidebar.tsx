import PlaylistCollection from './PlaylistCollection'
PlaylistCollection
import { sidebarReq } from '../assets/types'
import AddPlaylist from './AddPlaylist'

export default function Sidebar({ userPlaylists, updatePlayColl, setCurrentPlaylist, currentPlaylist }: sidebarReq) {

    return (
      <main className='sm:h-full w-full sm:w-1/2 md:w-1/3 bg-gray rounded-md p-4 text-white overflow-hidden'>
        <h1 className='sm:text-3xl font-semibold'>ListConductor</h1>
        <h3 className='sm:text-lg font-semibold my-7'>UserName</h3>
        <ul className='flex flex-col sm:h-54 font-semibold mb-10'>
          <li className='sm:py-4'>
            <a className='hover:text-gunmetal' href='#'>HOME</a>
          </li>
          <li className='sm:py-4'>
            <a className='hover:text-gunmetal' href='#'>PLAYLISTS</a>
          </li>
          <li className='sm:py-4'>
            <a className='hover:text-gunmetal' href='#'>CONTACT</a>
          </li>
        </ul>
          <PlaylistCollection 
          currentPlaylist={currentPlaylist} 
          setCurrentPlaylist={setCurrentPlaylist} 
          playlistCollection={userPlaylists}/>
          <AddPlaylist addPlaylistToCollection={updatePlayColl}/>
      </main>
    );
}
