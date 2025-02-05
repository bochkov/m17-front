'use client'

import React from 'react';
import PropTypes from 'prop-types';
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

    const fetchAlbums = () => {
        fetch('/api/v1/albums')
            .then(resp => resp.json())
            .then(resp => {
                resp.sort((a, b) => a.id > b.id ? 1 : -1)
                resp = resp.concat([{ 'id': -1, 'slug': '', 'name': 'Все' }])
                setAlbums(resp);
            })
    }

    React.useEffect(() => {
        fetchAlbums();
    }, [])

    return <Albums albums={albums} />
}

Albums.propTypes = {
    albums: PropTypes.array
}

function Albums({ albums }) {
    const [curAlbum, setCurAlbum] = React.useState(null)
    const [songs, setSongs] = React.useState(null)

    const fetchSongs = (album) => {
        setCurAlbum(album);
        fetch(`/api/v1/lyric/${album.slug}`)
            .then(resp => resp.json())
            .then(resp => {
                setSongs(resp);
            })
    }

    React.useEffect(() => {
        if (albums != null) {
            fetchSongs(albums[0]);
        }
    }, [albums])

    return (
        albums === null ?
            <></> :
            <>
                <div className='lyrics__albums'>
                    {
                        albums.map(
                            (music) =>
                                <div role="presentation" className='lyrics__album' key={music.id} onClick={() => fetchSongs(music)}>
                                    <AlbumCover className='lyrics__album__cover' slug={music.slug === '' ? 'mix' : music.slug} />
                                    <br />
                                    <span>{music.name}</span>
                                </div>
                        )
                    }
                </div>
                <Divide cur={1} total={2} />
                <Songs curAlbum={curAlbum} songs={songs} />
            </>
    )
}

Songs.propTypes = {
    curAlbum: PropTypes.object,
    songs: PropTypes.array
}

function Songs({ curAlbum, songs }) {

    const [lyrics, setLyrics] = React.useState(null)

    React.useEffect(() => {
        if (curAlbum == null || curAlbum.slug === '') {
            showAllLyrics(songs);
        } else if (songs != null) {
            showLyrics(curAlbum, songs[0]);
        }
    }, [curAlbum, songs])


    const showLyrics = (album, lyric) => {
        setLyrics(lyric)
        ym(87547729, 'hit', `/lyrics/${album.slug}/${lyric.slug}`, {
            params: {
                title: `${lyric.name} :: ${album.name}`,
            }
        });
    }

    const showAllLyrics = (lyric) => {
        setLyrics(lyric)
        ym(87547729, 'hit', '/lyrics/all', {
            params: {
                title: `Все тексты`,
            }
        });
    }

    return songs === null || curAlbum === null || curAlbum.slug === '' ?
        <Lyric lyric={lyrics} />
        :
        <>
            <div className='lyrics__songs'>
                {
                    songs.map(
                        (s) => <div role="presentation" key={s.id} onClick={() => showLyrics(curAlbum, s)}>{s.name}</div>
                    )
                }
            </div>
            <Divide cur={1} total={2} />
            <Lyric lyric={lyrics} />
        </>
}


AlbumCover.propTypes = {
    className: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

function AlbumCover(props) {
    return (
        <Image className={props.className}
            src={`/static/img/music/${props.slug}.png`} alt='' width={0} height={0} sizes='50vw' />
    )
}

Lyric.propTypes = {
    lyric: PropTypes.any
}

function Lyric({ lyric }) {
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

OneLyric.propTypes = {
    lyric: PropTypes.object
}

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