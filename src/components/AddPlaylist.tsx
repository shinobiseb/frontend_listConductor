import { PlaylistType, AddPlayProps } from "../assets/types";
import React, { useRef } from 'react';

export default function AddPlaylist({ addPlaylistToCollection }: AddPlayProps) {

  // Input Checkers
  const titleInput = useRef<HTMLInputElement>(null);

  // Type narrowing => catch HTML element errors
  const isInput = (ele: React.RefObject<HTMLInputElement>): string | null => {
    if (!ele.current) {
      console.warn(`Missing ${ele} element!`);
      return null;
    }
    const element = ele.current;
    if (!(element instanceof HTMLInputElement)) {
      console.warn(`Got the wrong Element for ${ele}!`);
      return null;
    }
    if (element.value === "") {
      return `Value not given`;
    }
    return element.value;
  };

  function getNewPlaylist(): PlaylistType {
    const title = isInput(titleInput);
    if (!title || title === 'Value not given') {
      return {
        name: "Untitled Playlist",
        tracks: [],
      };
    }
    return {
      name: title,
      tracks: [
        {
          artist: null,
          title: null,
          duration: null,
          link: null,
          info: {
            scoreData: {
              likes: null,
              dislikes: null,
            },
            views: null,
            uploadedOn: new Date(),
          },
          isAgeRestricted: null,
          img: null,
        },
      ],
    };
  }

  return (
    <div className='flex flex-row w-full justify-evenly items-center'>
      <input
        id="text-box-handle" className="rounded-lg p-2 w-3/4 text-black"
        type="text"
        placeholder='Playlist title'
        ref={titleInput}
      />
    
      <button
      id="AddPlaylistButton"
        className='button'
        onClick={() => {
          const newPlay = getNewPlaylist();
          addPlaylistToCollection(newPlay);
        }}
      >
        Add
      </button>
    </div>
  );
}
