import { Dispatch, SetStateAction } from 'react';

export type Track = {
  artist: string | null;
  title: string | null;
  duration: number | null;
  link: string | null;
  info: {
    scoreData: {
      likes: number | null;
      dislikes: number | null;
    };
    views: number | null;
    uploadedOn: Date;
  };
  isAgeRestricted: boolean | null;
  img: string | null;
};

export type Tracklist = Track[];


export interface PlaylistType {
  name: string;
  tracks: Tracklist;
};

export type AddPlayProps = {
  addPlaylistToCollection: (newPlaylist: PlaylistType) => void;
};

export type AddSongProps = {
  addSongToPlaylist: (newSong: Track) => void;
  songs: Tracklist;
  openBool: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  token: string
};

export interface useStateFunction {
  setOpen: Dispatch<SetStateAction<boolean>>;
  openState: boolean;
}

export type PlaylistCollectionProps = {
  playlistCollection: PlaylistType[];
  setCurrentPlaylist: Dispatch<SetStateAction<any>>;
  currentPlaylist : Object;
  removePlaylist : any;
};

export type SongProps = {
  track: Track;
  index: number;
  removeSong: (index: number) => void;
};

export interface sidebarReq {
  userPlaylists: PlaylistType[];
  updatePlayColl: Dispatch<SetStateAction<any>>;
  setCurrentPlaylist : Dispatch<SetStateAction<any>>;
  currentPlaylist : Object;
  removePlaylist : any;
}

export type SongListProps = {
  tracklist: Track[];
  removeSong: (index: number) => void;
};

export type playlistProps = {
  playlist : PlaylistType;
  removePlaylist : any;
  index: number;
}

export type songSearchResults = {
  name: string,
  artists: Array<{ name: string }>
}

export type Artist = {
  name: string;
  type: string;
  uri: string;
};

export type Album = {
  album_type: string;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export type SpotifyTrack = {
  album: Album;
  artists: Artist[];
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  name: string;
  track_number: number;
  type: string;
  uri: string;
};