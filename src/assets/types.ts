import { Dispatch, SetStateAction } from "react";

export type Track = {
    artist: string;
    title: string;
    duration: number;
    link: string;
    info: {
      scoreData: {
        likes: number;
        dislikes: number;
      };
      views: number;
      uploadedOn: Date;
    };
    isAgeRestricted: boolean;
    img: string;
  };
  
export type Tracklist = Track[];

export type PlaylistType = {
  name: string;
  tracks: Tracklist;
};

export type AddPlayProps = {
    setPlaylist: (newPlaylist: PlaylistType) => void;
}

export type AddSongProps = {
    addSongToPlaylist: (newSong: Track) => void;
    songs: any;
    openBool : boolean
  };

  
export interface useStateFunction {
    setOpen : Dispatch<SetStateAction<boolean>>
    openState : boolean
}

export type PlaylistCollectionProps = {
    playlistCollection: PlaylistType[];
}

export type SongProps = {
  track : Track;
}

export interface sidebarReq {
    userPlaylists : PlaylistType[];
    userName : string;
}
