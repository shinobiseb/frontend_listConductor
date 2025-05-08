import React, { useState } from 'react'
import { PlaylistType } from '../assets/types'
import { importPlaylistToSpotifyProps } from '../assets/types'

export default function Import( {playlistToImport, userId} : importPlaylistToSpotifyProps ) {

    const [ showModal, setShowModal ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    async function addTracksToCreatedPlaylist( createdPlaylistID: string){
        if(createdPlaylistID === ""){
            console.error("No Created Playlist")
        }

        let playlistParams = {
            "method": "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "uris": playlistURIMapper(),
                "position": 0
            })
        }

        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${createdPlaylistID}/tracks`, playlistParams);
            if(!response.ok){
                console.error("Response Error in Adding Tracks to Playlist: ", response)
            }
            const data = await response.json()
            if("snapshot_id" in data){
                setShowModal(true)
                setTimeout(()=> setShowModal(false), 2000)
            } else {
                console.error("Something Went wrong: ", data)
            }
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    async function createPlaylistInSpotify(){
        console.log("Starting Playlist Import Process")
        setLoading(true)

        let playlistParams = {
            "method": "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name" : playlistToImport.name,
                "public" : true,
                "collaborative" : false,
                "description" : "Created by listConductor"
            })
        }

        if(!userId || userId === ""){
            console.error("User ID: ", userId)
            return
        }

        try {
            let response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, playlistParams)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json()
            addTracksToCreatedPlaylist(data.id)
        } catch (error) {
            console.error(error)
        }
        
    }

    function playlistURIMapper() : string[] {
        let tracksToImport = []

        for(let i = 0; i < playlistToImport.tracks.length; i++){
            tracksToImport.push(playlistToImport.tracks[i].uri)
        }
        return tracksToImport
    }

    return (
        <main className='w-full flex flex-col justify-center items-center'>
            <button 
            onClick={createPlaylistInSpotify} 
            className='button w-1/2 justify-center'>
                Import Playlist to Spotify
            </button>
            {
                loading ? <h1 className='bg-orange px-4 py-2 mt-2 rounded-md'>Importing...</h1> : null
            }
            { 
                showModal ? 
                <div className='relative bg-green px-4 rounded-md py-2 mt-2'>
                    Playlist Successfully Imported!
                </div>
                :null
            }
        </main>
    )
}
