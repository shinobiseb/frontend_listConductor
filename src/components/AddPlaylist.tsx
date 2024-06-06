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
    if (!title) {
      return {
        name: "Untitled Playlist", // Default name if the input is invalid
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
    <div className='flex flex-col w-3/4 justify-center items-center'>
      <input
        id="text-box-handle" className="rounded-lg p-2 w-3/4"
        type="text"
        placeholder='Title'
        ref={titleInput}
      />

      <button
        className='button rounded-lg p-2 hover:ease-in duration-250 w-1/2 bg-white-white'
        onClick={() => {
          const newPlay = getNewPlaylist();
          addPlaylistToCollection(newPlay);
        }}
      >
        Add New Playlist
      </button>
    </div>
  );
}
