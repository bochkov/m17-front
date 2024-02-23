'use client'

import React from 'react';

import Image from 'next/image';

import Divide from './Divide';
import { LgAppleMusic, LgSpotify, LgVkMusic, LgYandex, LgYoutube } from './logos/LgMusicProv';

import './Music.css';

function AlbumLink({ link }) {
    const links = {
        '1': <LgYandex />,
        '2': <LgAppleMusic />,
        '3': <LgSpotify />,
        '4': <LgYoutube />,
        '5': <LgVkMusic />
    }
    return (
        <a href={link.url} target='_blank' rel='noreferrer noopener'
            className='album__link__provider invert'>
            {links[link.provid]}
        </a>
    )
}

function AlbumLinksOrSoon({ links }) {
    return (
        links.length === 0 ?
            <span className='album__soon'>скоро</span> :
            links.map(
                link => <AlbumLink key={link.id} link={link} />
            )
    )
}

function AlbumCover(props) {
    return (
        <Image className={props.className}
            src={`/static/img/music/${props.slug}.png`} alt='' width={0} height={0} sizes='100vw' />
    )
}

function Album({ music }) {
    return (
        <div className='album'>
            <span className='album__title'>{music.name}</span><br />
            <span className='album__year'>{music.year}</span><br />
            <AlbumCover className='album__cover' slug={music.slug} /><br />
            <AlbumLinksOrSoon links={music.links} />
        </div>
    )
}

export default function Music({ type }) {
    const [musics, setMusics] = React.useState(null)

    const getEndpoint = (type) => {
        switch (type) {
            case 'albums':
                return '/api/v1/albums';
            case 'singles':
                return '/api/v1/albums/singles';
            case undefined:
            default:
                return '/api/v1/albums/all';
        }
    }

    const fetchData = (type) => {
        const endpoint = getEndpoint(type);
        fetch(endpoint)
            .then(resp => resp.json())
            .then(resp => setMusics(resp))
    }

    React.useEffect(() => fetchData(type), [])

    return (
        <div>
            {
                musics === null ?
                    <></> :
                    musics.map(
                        (m, idx) =>
                            <div key={m.id}>
                                <Album music={m} />
                                <Divide cur={idx + 1} total={musics.length} />
                            </div>
                    )
            }
        </div>
    )
}
