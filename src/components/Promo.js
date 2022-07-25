import React from 'react';

import API from './Api';
import { LgAppleMusicColor, LgSpotifyColor, LgVkMusicColor, LgYandexColor, LgYoutubeColor } from './logos/LgMusicProv';

import './Promo.css';

class AlbumLink extends React.Component {
    render() {
        return (
            <a href={this.props.link.url} target='_blank' rel='noreferrer' className='promo__album__link__provider'>
                {{
                    '1': <LgYandexColor />,
                    '2': <LgAppleMusicColor />,
                    '3': <LgSpotifyColor />,
                    '4': <LgYoutubeColor />,
                    '5': <LgVkMusicColor />
                }[this.props.link.provid]}
            </a>
        )
    }
}

class AlbumLinksOrSoon extends React.Component {
    render() {
        return (
            this.props.links.length === 0 ?
                <span className='promo__album__soon'>скоро</span> :
                this.props.links.map(
                    link => <AlbumLink key={link.id} link={link} />
                )
        )
    }
}

class AlbumCover extends React.Component {
    render() {
        return (
            <img className={this.props.className}
                src={process.env.PUBLIC_URL + '/static/img/music/' + this.props.slug + '.png'} alt='' />
        )
    }
}

class Album extends React.Component {
    render() {
        return (
            <div className='promo__album'>
                <AlbumCover className='promo__album__cover' slug={this.props.music.slug} /><p />
                <AlbumLinksOrSoon links={this.props.music.links} />
            </div>
        )
    }
}

class Promo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: null,
        }
    }
    componentDidMount() {
        API.get('/api/v1/promo').then(resp => {
            const music = resp.data;
            this.setState({ music })
        })
    }
    render() {
        return (
            <div className='promo'>
                {this.state.music === null ? <div /> : <Album music={this.state.music} />}
            </div>
        )
    }
}

export default Promo;
