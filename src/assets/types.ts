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

export type PlaylistType = {
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
};

export interface useStateFunction {
  setOpen: Dispatch<SetStateAction<boolean>>;
  openState: boolean;
}

export type PlaylistCollectionProps = {
  playlistCollection: PlaylistType[];
  setCurrentPlaylist: Dispatch<SetStateAction<any>>;
  currentPlaylist : Object;
};

export type SongProps = {
  track: Track;
};

export interface sidebarReq {
  userPlaylists: PlaylistType[];
  updatePlayColl: Dispatch<SetStateAction<any>>;
  setCurrentPlaylist : Dispatch<SetStateAction<any>>;
  currentPlaylist : Object;
}

export type SongListProps = {
  tracklist: Track[];
};

export type playlistProps = {
  playlist : PlaylistType
}