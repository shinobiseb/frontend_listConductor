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

export type Tracklist = SpotifyTrack[];

export interface PlaylistType {
  name: string;
  tracks: Tracklist;
};

export type AddPlayProps = {
  addPlaylistToCollection: (newPlaylist: PlaylistType) => void;
};

export type AddSongProps = {
  addSongToPlaylist: (newSong: SpotifyTrack) => void;
  songs: Tracklist;
  openBool: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  token: string;
};

export interface useStateFunction {
  setOpen: Dispatch<SetStateAction<boolean>>;
  openState: boolean;
}

export type PlaylistCollectionProps = {
  playlistCollection: PlaylistType[];
  setCurrentPlaylist: Dispatch<SetStateAction<PlaylistType>>;
  currentPlaylist: PlaylistType;
  removePlaylist: (index: number) => void;
};

export type SongProps = {
  track: SpotifyTrack;
  index: number;
  removeSong: (index: number) => void;
};

export interface SidebarProps {
  userPlaylists: PlaylistType[];
  updatePlayColl: (newPlaylist: PlaylistType) => void;
  setCurrentPlaylist: Dispatch<SetStateAction<PlaylistType>>;
  currentPlaylist: PlaylistType;
  removePlaylist: (index: number) => void;
}

export interface MusicCardRequirements {
  img: string,
  title: string,
  author: string,
}

export type SongListProps = {
  tracklist: SpotifyTrack[];
  removeSong: (index: number) => void;
};

export type PlaylistProps = {
  playlist: PlaylistType;
  removePlaylist: (index: number) => void;
  index: number;
}

export type SongSearchResults = {
  name: string;
  artists: Array<{ name: string }>;
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
