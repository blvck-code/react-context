import React, { useState } from "react";
import NewSongForm from "./NewSongForm";



const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
    ])
    const addSong = () => {
        setSongs([{ title: 'new song', id: songs.length + 1}, ...songs])
    }
    return (
        <div className='song-list'>
            <ul>
                {
                    songs.map((song) => (
                        <li key={song.id}>{ song.title} {song.id}</li>
                    ))
                }
            </ul>
            <NewSongForm />
        </div>
    )
}

export default SongList
