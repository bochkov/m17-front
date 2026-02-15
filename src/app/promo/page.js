'use client'

import React from 'react';
import PropTypes from 'prop-types';

import * as Logo from '@/components/logos/LgMusicProv';

import './promo.css';

AlbumLink.propTypes = {
    link: PropTypes.object.isRequired
}

function AlbumLink({ link }) {
    const links = {
        '1': <Logo.LgYandexColor />,
        '2': <Logo.LgAppleMusicColor />,
        '3': <Logo.LgSpotifyColor />,
        '4': <Logo.LgYoutubeColor />,
        '5': <Logo.LgVkMusicColor />
    }
    return (
        <a href={link.url} target='_blank' rel='noreferrer' className='promo__album__link__provider'>
            {links[link.provId]}
        </a>
    )
}

AlbumLinksOrSoon.propTypes = {
    links: PropTypes.array.isRequired
}

function AlbumLinksOrSoon({ links }) {
    return (
        links.length === 0 ?
            <span className='promo__album__soon'>скоро</span> :
            links.map(
                link => <AlbumLink key={link.id} link={link} />
            )
    )
}

AlbumCover.propTypes = {
    className: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

function AlbumCover(props) {
    return (
        <img className={props.className}
            src={'/static/img/music/' + props.slug + '.png'} alt='' />
    )
}

Album.propTypes = {
    music: PropTypes.object.isRequired
}

function Album({ music }) {
    return (
        <div className='promo__album'>
            <AlbumCover className='promo__album__cover' slug={music.slug} /><p />
            <AlbumLinksOrSoon links={music.links} />
        </div>
    )
}

export default function PromoPage() {
    const [music, setMusic] = React.useState(null)

    React.useEffect(() => {
        fetch('/api/v1/promo')
            .then(resp => resp.json())
            .then(data => setMusic(data))
    }, [])

    return (
        <div className='promo'>
            {music === null ? <div /> : <Album music={music} />}
        </div>
    )
}
