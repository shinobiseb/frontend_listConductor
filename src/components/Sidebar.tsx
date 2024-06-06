import PlaylistCollection from './PlaylistList'
PlaylistCollection
import { sidebarReq } from '../assets/types'
import AddPlaylist from './AddPlaylist'

export default function Sidebar({ userPlaylists, userName }: sidebarReq) {
  function propsFun() {
    console.log(userPlaylists)
  }
    return (
      <main className='sm:h-full w-full sm:w-1/3 bg-gray rounded-md p-4 text-white overflow-hidden'>
        <h3 onClick={()=> propsFun()} className='sm:text-lg font-semibold my-7'>{userName}</h3>
        <ul className='flex flex-col justify-evenly sm:h-64 font-semibold mb-10'>
          <a className='hover:text-gunmetal' href='#'>HOME</a>
          <a className='hover:text-gunmetal' href='#'>PLAYLISTS</a>
          <a className='hover:text-gunmetal' href='#'>CONTACT</a>
        </ul>
          <PlaylistCollection playlistCollection={userPlaylists}/>
      </main>
    );
}
