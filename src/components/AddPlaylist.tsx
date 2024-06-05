import { PlaylistType, AddPlayProps } from "../assets/types"

export default function AddPlaylist({ setPlaylist }: AddPlayProps) {

  return (
    <div>
        <button 
        className="addPlay flex button rounded-lg p-2 hover:ease-in duration-250 bg-white mb-2"
        >
            Add Playlist
        </button>
    </div>
  )
}
