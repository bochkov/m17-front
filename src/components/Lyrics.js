'use client'

import { Caveat } from 'next/font/google';
import React from 'react';
import Image from 'next/image';

import Divide from './Divide';

import './Lyrics.css'

const caveat = Caveat({
    subsets: ['cyrillic'],
    weight: 'variable',
    display: 'swap'
})

export default function Lyrics() {
    const [albums, setAlbums] = React.useState(null)
    const [songs, setSongs] = React.useState(null)
    const [lyrics, setLyrics] = React.useState(null)

    const fetchAlbums = () => {
        fetch('/api/v1/albums')
            .then(resp => resp.json())
            .then(resp => {
                resp.sort((a, b) => a.id > b.id ? 1 : -1)
                setAlbums(resp);
                fetchSongs(resp[0].id)
            })
    }

    const fetchSongs = (albumId) => {
        fetch('/api/v1/albums/' + albumId + '/songs')
            .then(resp => resp.json())
            .then(resp => {
                setSongs(resp);
                setLyrics(resp[0])
            })
    }

    const showLyrics = (lyric) => {
        setLyrics(lyric)
    }

    React.useEffect(() => {
        fetchAlbums();
    }, [])

    return (
        <div>
            <div className='lyrics__albums'>
                {
                    albums === null ?
                        <div /> :
                        albums.map(
                            (music) =>
                                <div className='lyrics__album' key={music.id} onClick={() => fetchSongs(music.id)}>
                                    <AlbumCover className='album__cover' slug={music.slug} />
                                    <br />
                                    <span>{music.name}</span>
                                </div>
                        )
                }
                <Divide cur={1} total={songs === null ? 1 : 2} />
            </div>
            <div className='lyrics__songs'>
                {
                    songs === null ?
                        <div /> :
                        songs.map(
                            (s) => <div key={s.id} onClick={() => showLyrics(s)}>{s.name}</div>
                        )
                }
                <Divide cur={1} total={lyrics === null ? 1 : 2} />
            </div>
            <div>
                {
                    lyrics === null ?
                        <div /> :
                        <Lyric key={lyrics.id} lyric={lyrics} />
                }
            </div>
        </div>
    )
}

function AlbumCover(props) {
    return (
        <Image className={props.className}
            src={'/static/img/music/' + props.slug + '.png'} alt='' width='70' height='70' sizes='100vw' />
    )
}


function Lyric({ lyric }) {
    return (
        <div className='lyric'>
            <span className='lyric__name'>{lyric.name}</span>
            <span className={`${caveat.className} lyric__text`}>{lyric.lyrics}</span>
        </div>
    )
}
