'use client'

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Divide from './Divide';
import { LgAppleMusic, LgSpotify, LgVkMusic, LgYandex, LgYoutube } from './logos/LgMusicProv';

import './Music.css';

AlbumLink.propTypes = {
    link: PropTypes.object.isRequired
}

function AlbumLink({ link }) {
    const links = {
        '1': <LgYandex />,
        '2': <LgVkMusic />,
        '3': <LgSpotify />,
        '4': <LgAppleMusic />,
        '5': <LgYoutube />,
    }
    return (
        <a href={link.url} target='_blank' rel='noreferrer noopener'
            className='album__link__provider invert'>
            {links[link.provId]}
        </a>
    )
}

AlbumLinksOrSoon.propTypes = {
    links: PropTypes.array
}

function AlbumLinksOrSoon({ links, cur, total }) {
    return (
        links.length === 0 && cur === total
            ? <span className='album__soon'>скоро</span>
            : links
                .sort(
                    (l1, l2) => l1.provId - l2.provId
                )
                .map(
                    link => <AlbumLink key={link.id} link={link} />
                )
    )
}

AlbumCover.propTypes = {
    className: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

function AlbumCover(props) {
    return (
        <Image className={props.className}
            src={`/static/img/music/${props.slug}.png`} alt='' width={0} height={0} sizes='100vw' />
    )
}

Album.propTypes = {
    music: PropTypes.object.isRequired
}

function Album({ music, cur, total }) {
    return (
        <div className='album'>
            <span className='album__title'>{music.name}</span><br />
            <span className='album__year'>{music.year}</span><br />
            <AlbumCover className='album__cover' slug={music.slug} /><br />
            <AlbumLinksOrSoon links={music.links} cur={cur} total={total} />
        </div>
    )
}

Music.propTypes = {
    type: PropTypes.string
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
                musics === null
                    ? <></>
                    : musics
                        .sort(
                            (m1, m2) => m1.year === m2.year
                                ? m2.id - m1.id
                                : m2.year - m1.year
                        )
                        .map(
                            (m, idx) =>
                                <div key={m.id}>
                                    <Album music={m} cur={idx + 1} total={musics.length} />
                                    <Divide cur={idx + 1} total={musics.length} />
                                </div>
                        )
            }
        </div>
    )
}
