import { stringify } from "querystring";
import { PlaylistType, Track, playlistProps } from "../assets/types";
import { parse } from "path/posix";

export const useLocalStorage = (key: string) => {
    
  const setItem = (target: string ,value: unknown) => {
      try {
        localStorage.setItem(target, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };
  
    const getItem = () => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
      } catch (error) {
        console.log(error);
      }
    };
  
    const removeItem = (playlist : PlaylistType, track : Track) => {
        try {
        localStorage.removeItem(key);
      } catch (error) {
        console.warn(error);
      }
    };
  
    const clear = () => {
        try {
            localStorage.clear
        } catch(error) {
            console.warn(error)
        }
    };
  
    return { setItem, getItem, removeItem, clear };
  };