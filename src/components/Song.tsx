import { Track, SongProps, SpotifyTrack } from '../assets/types';
import { RiDeleteBin7Line } from "react-icons/ri";

// Minutes Calculator
const minCalc = (duration: number) => {
  const min = Math.floor(duration / 60000);
  return min;
}

const secCalc = (duration: number) => {
  const sec = Math.floor((duration % 60000) / 1000);
  return sec < 10 ? `0${sec}` : sec;
}

export default function Song({ track, removeSong, index }: SongProps) {

  function imgHelper(track: SpotifyTrack) {
  if (
    track.album &&
    track.album.images &&
    track.album.images.length > 0
  ) {
    return track.album.images[0].url;
  }
  return 'https://cdn.saleminteractivemedia.com/shared/images/default-cover-art.png';
}


  function artistLooper() {
    // Ensure artists is not undefined or null
    const artists = track.artists || [];

    if (artists.length > 1) {
      return artists.map((element) => element.name).join(', ');
    } else if (artists.length === 1) {
      return artists[0].name;
    }
    return 'No artist available';
  }

  return (
    <li className='song-container transition-all w-full flex flex-row justify-between sm:px-2 py-2 text-white hover:cursor-pointer hover:bg-gunmetal h-24'>
      <div className="song-info-div-song flex flex-row justify-center items-center h-full">
        <img
        className='aspect-square object-fit h-full' src={imgHelper(track)} alt="" />
        <div className="song-info flex flex-col pl-2">
          <h1 className='text-lg'> {track.name} </h1>
          <h2 className='italic text-sm'> {artistLooper()} </h2>
        </div>
      </div>
      {/* Song Stats and Numbers */}
      <div className="song-stats flex items-center">
        <h2>
          {typeof track.duration_ms === "number" 
            ? `${minCalc(track.duration_ms)}:${secCalc(track.duration_ms)}` 
            : 'Invalid duration'}
        </h2>
        <button
          id='RemoveSongButton'
          className="delete-icon ml-2 rounded-full"
          onClick={() => removeSong(index)}>
          <RiDeleteBin7Line />
        </button>
      </div>
    </li>
  )
}
