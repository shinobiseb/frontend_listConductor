import React from 'react'
import AddSong from './AddSong'
import SongList from './SongList'
import { AddSongProps, PlaylistType, SongListProps } from '../assets/types'
import Import from './Import'
import { importPlaylistToSpotifyProps } from '../assets/types'

type PlaylistEditorProps = AddSongProps & SongListProps & importPlaylistToSpotifyProps;

function PlaylistEditor( 
    { 
        addSongToPlaylist, 
        songs, 
        openBool, 
        setOpen, 
        token, 
        tracklist,
        removeSong,
        playlistToImport,
        userId,
        currentPlaylist
    }: PlaylistEditorProps ) {
  return (
    <main className='flex flex-col h-full w-full'>
        <section className='flex flex-col h-5/6 w-full'>
            <AddSong
            addSongToPlaylist={addSongToPlaylist}
            currentPlaylist={currentPlaylist}
            songs={songs}
            openBool={openBool}
            setOpen={setOpen}
            token={token}
            />
            <SongList
              tracklist={tracklist}
              removeSong={removeSong}
            />
        </section>
        <Import
        userId={userId}
        playlistToImport={playlistToImport}
        />
    </main>
  )
}

export default PlaylistEditor