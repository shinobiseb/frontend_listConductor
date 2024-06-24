import React from 'react';
import { songSearchResults } from '../assets/types';

const SearchResult: React.FC<songSearchResults> = ({ name, artists }) => {
  function artistLooper() {
    if (artists.length > 1) {
      return artists.map((element) => element.name).join(', ');
    } else if (artists.length === 1) {
      return artists[0].name;
    }
    return '';
  }

  return (
    <li className='px-2 py-1 flex-row flex justify-between cursor-pointer transition-all hover:bg-gunmetal hover:text-white rounded-none'>
      <h4 className='truncate text-lg w-1/2'>{name}</h4>
      <h4 className='truncate text-lg w-5/12 text-right'>{artistLooper()}</h4>
    </li>
  );
};

export default SearchResult;
