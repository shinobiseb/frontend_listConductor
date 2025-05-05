import React, { useState } from 'react'
import { PlaylistType } from '../assets/types'
import { importPlaylistToSpotifyProps } from '../assets/types'

export default function Import( {playlistToImport, userId} : importPlaylistToSpotifyProps ) {

    async function createPlaylistInSpotify(){
        console.log("Starting Playlist Import Process")

        let playlistParams = {
            "method": "POST",
            body: JSON.stringify({
                "name" : playlistToImport.name,
                "public" : true,
                "collaborative" : false,
                "description" : "Created by listConductor"
            })
        }

        try {
            let response = await fetch(`/users/${userId}/playlists`, playlistParams)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
        
    }

    return (
      <main className='w-full flex justify-center items-center'>
          <button className='button w-1/2 justify-center'>
              Import Playlist to Spotify
          </button>
      </main>
    
    )
}
