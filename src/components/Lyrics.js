'use client'

import React from 'react';

import { Caveat } from 'next/font/google';
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
    const [curAlbum, setCurAlbum] = React.useState(null)
    const [songs, setSongs] = React.useState(null)
    const [lyrics, setLyrics] = React.useState(null)

    const fetchAlbums = () => {
        fetch('/api/v1/albums')
            .then(resp => resp.json())
            .then(resp => {
                resp.sort((a, b) => a.id > b.id ? 1 : -1)
                resp = resp.concat([{ 'id': -1, 'slug': '', 'name': 'Все' }])
                setAlbums(resp);
                fetchSongs(resp[0])
            })
    }

    const fetchSongs = (album) => {
        setCurAlbum(album);
        fetch(`/api/v1/lyric/${album.slug}`)
            .then(resp => resp.json())
            .then(resp => {
                setSongs(resp);
                album.slug === '' ?
                    showAllLyrics(resp) :
                    showLyrics(album, resp[0]);
            })
    }

    const showLyrics = (album, lyric) => {
        setLyrics(lyric)
        window.ym(87547729, 'hit', `/lyrics/${album.slug}/${lyric.slug}`, {
            params: {
                title: `${lyric.name} :: ${album.name}`,
            }
        });
    }

    const showAllLyrics = (lyric) => {
        setLyrics(lyric)
        window.ym(87547729, 'hit', '/lyrics/all', {
            params: {
                title: `Все тексты`,
            }
        });
    }

    React.useEffect(() => {
        fetchAlbums();
    }, [])

    function Albums() {
        return (
            albums === null ?
                <></> :
                <div className='lyrics__albums'>
                    {
                        albums.map(
                            (music) =>
                                <div className='lyrics__album' key={music.id} onClick={() => fetchSongs(music)}>
                                    <AlbumCover className='lyrics__album__cover' slug={music.slug === '' ? 'mix' : music.slug} />
                                    <br />
                                    <span>{music.name}</span>
                                </div>
                        )
                    }
                </div>
        )
    }

    function Songs() {
        return (
            <div className='lyrics__songs'>
                {
                    songs.map(
                        (s) => <div key={s.id} onClick={() => showLyrics(curAlbum, s)}>{s.name}</div>
                    )
                }
            </div>
        )
    }

    return (
        <>
            {
                albums === null ?
                    <></> :
                    <>
                        <Albums />
                        <Divide cur={1} total={2} />
                    </>
            }{
                songs === null || curAlbum === null || curAlbum.slug === '' ?
                    <></> :
                    <>
                        <Songs />
                        <Divide cur={1} total={2} />
                    </>
            }
            <Lyric lyric={lyrics} />
        </>
    )
}

function AlbumCover(props) {
    return (
        <Image className={props.className}
            src={`/static/img/music/${props.slug}.png`} alt='' width={0} height={0} sizes='50vw' />
    )
}

function Lyric({ lyric }) {

    function OneLyric({ lyric }) {
        return (
            lyric === null ?
                <></> :
                <div className='lyric'>
                    <span className='lyric__name'>{lyric.name}</span>
                    <span className={`${caveat.className} lyric__text`}>{lyric.lyrics}</span>
                </div>
        )
    }

    return (
        lyric instanceof Array ?
            <div className='lyrics'>
                {
                    lyric.map((l, idx) =>
                        <div key={l.id}>
                            <OneLyric lyric={l} />
                            <Divide cur={idx + 1} total={lyric.length} />
                        </div>
                    )
                }
            </div>
            :
            <OneLyric lyric={lyric} />
    )
}