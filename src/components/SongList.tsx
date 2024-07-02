import { Track, Tracklist } from '../assets/types';
import Song from './Song';
import { SongListProps } from '../assets/types';

const trackMapper = (playlist: Tracklist, removeSong: (index: number) => void) => {
  if (!Array.isArray(playlist)) {
    console.error('playlist is:', playlist);
    return [];
  }

  if (playlist.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center mt-4 w-full'>
        <h3 className='text-white text-4xl font-semibold'>Add Some Songs!</h3>
        <p className='sm:text-md text-white mt-4 italic'>Click the Add Song button above to add songs to this playlist</p>
      </div>
    );
  }

  return playlist.map((track, index) => (
    <Song 
      key={index} 
      track={track}
      index={index}
      removeSong={removeSong}
    />
  ));
};

export default function SongList({ tracklist, removeSong }: SongListProps) {
  if (!tracklist) {
    console.error('No Tracklist for' + tracklist);
    return (
      <div className='flex flex-col h-3/4 items-center mt-4 w-full'>
        <h3 className='text-white text-4xl font-semibold'>Add Some Songs!</h3>
        <p className='sm:text-md text-white mt-4 italic'>Click the Add Song button above to add songs to this playlist</p>
      </div>
    );
  }

  return (
    <ul className='playlist-container mt-2 h-3/4 flex flex-col items-left w-full overflow-y-scroll'>
        {trackMapper(tracklist, removeSong)}
    </ul>
  );
}
