import { Tracklist } from '../assets/tracks'

type addPlayProps = {
    setPlaylist: (newPlay: Tracklist) => void;
    playlists : Tracklist[]
}


export default function AddPlaylist( { setPlaylist, playlists } : addPlayProps) {
  
  function setPlay(list : Tracklist[]) {
    setPlaylist(list)
  }

  return (
    <div>
        <button 
        className="addPlay flex button rounded-lg p-2 hover:ease-in duration-250 bg-white-white mb-2"
        onClick={() => {
          setPlay(playlists)
        }}
        >
            Add playlist
        </button>
    </div>
  )
}
