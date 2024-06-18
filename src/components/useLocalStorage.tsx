import { stringify } from "querystring";
import { PlaylistType, Track, Tracklist, playlistProps } from "../assets/types";
import { parse } from "path/posix";
import Playlist from "./Playlist";

export const useLocalStorage = (key: string) => {
    
  const setPlay = (key: string, tracks: Tracklist) => {
    if(localStorage.getItem(key) === null){
      try {
          localStorage.setItem(key, JSON.stringify(tracks));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error(`${key} already exists as a playlist`)
      return
    };
  }

  const addSongtoLocalStorage = () => {

  }
  
    const getPlaylist = () => {
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
  
    const clear = () => {
        try {
            localStorage.clear()
        } catch(error) {
            console.warn(error)
        }
    };
  
    return { setPlay, getPlaylist, removePlay, clear };
  };