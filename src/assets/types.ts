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
  currentPlaylist: PlaylistType;
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
  images: Array<any>
  // Update images type
}

export type CodeVerifierProps = {
  setIsSpotifyAuth: React.Dispatch<React.SetStateAction<boolean>>
  setUserId: React.Dispatch<React.SetStateAction<string>>,
  token: string,
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export type importPlaylistToSpotifyProps = {
    playlistToImport : PlaylistType;
    userId: string | null;
}

//access_token: string, token_type: string, expires_in: number, refresh_token, Scope:
export type accessTokenObject = {
  access_token: string,
  token_type: string,
  expires_in: number,
  refresh_token: string,
  scope: string,
}

export type userDataType = {
  country: string,
  display_name: string,
  email: string,
  explicit_content: {
    filter_enabled: boolean,
    filter_locked: boolean,
  },
  external_urls: {
    spotify: string,
  },
  followers : {
    href: null,
    total: number
  },
  href: string,
  id: string,
  images: Array<any>
  product: string,
  type: string,
  uri: string
}