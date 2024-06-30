import { stringify } from "querystring";
import { PlaylistType, SpotifyTrack, Track, Tracklist } from "../assets/types";
import { parse } from "path/posix";
import Playlist from "./Playlist";
import PlaylistCollection from "./PlaylistCollection";

export const useLocalStorage = (key: string) => {
    
  const setPlay = (playlistTitle: string, tracks: Tracklist) => {
      try {
          localStorage.setItem(playlistTitle, JSON.stringify(tracks));
      } catch (error) {
        console.error(error);
      }
    };

  const setSong = ( newSong : Track | SpotifyTrack, targetPlaylist : PlaylistType) => {
    try {
      const playlist = localStorage.getItem(targetPlaylist.name)
      if(playlist) {
        const oldTrackArr = [...JSON.parse(playlist)]
        oldTrackArr.push(newSong)
        localStorage.setItem(targetPlaylist.name, JSON.stringify(oldTrackArr)) 
      } else {
        return undefined
      }
    } catch(error) {
      console.log(`${error} is an error`)
    }
  }
  
    const getPlaylist = (key : string) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch (error) {
        console.log(error);
      }
    };
  
    const removePlay = (playlist : PlaylistType) => {
        try {
        localStorage.removeItem(playlist.name);
        
      } catch (error) {
        console.warn(error);
      }
    };

    const removeSong = (index: number, playlist: PlaylistType) => {
      try {
        const updatedTracks = [...playlist.tracks];
        updatedTracks.splice(index, 1);
        localStorage.setItem(playlist.name, JSON.stringify(updatedTracks));
        return updatedTracks;
      } catch (error) {
        console.warn(error);
      }
    };
  
    const clear = () => {
        try {
            localStorage.clear()
        } catch(error) {
            console.warn(error)
        }
    };
    return { setPlay, setSong, removeSong, getPlaylist, removePlay, clear };
};