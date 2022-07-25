import React from 'react';

import API from './Api';
import Divide from './Divide';
import { LgAppleMusic, LgSpotify, LgVkMusic, LgYandex, LgYoutube } from './logos/LgMusicProv';

import './Music.css';

class AlbumLink extends React.Component {
    render() {
        return (
            <a href={this.props.link.url} target='_blank' rel='noreferrer noopener'
                className='album__link__provider invert'>
                {{
                    '1': <LgYandex />,
                    '2': <LgAppleMusic />,
                    '3': <LgSpotify />,
                    '4': <LgYoutube />,
                    '5': <LgVkMusic />
                }[this.props.link.provid]}
            </a>
        )
    }
}

class AlbumLinksOrSoon extends React.Component {
    render() {
        return (
            this.props.links.length === 0 ?
                <span className='album__soon'>скоро</span> :
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
            <div className='album'>
                <span className='album__title'>{this.props.music.name}</span><br />
                <span className='album__year'>{this.props.music.year}</span><br />
                <AlbumCover className='album__cover' slug={this.props.music.slug} /><br />
                <AlbumLinksOrSoon links={this.props.music.links} />
            </div>
        )
    }
}

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            musics: []
        }
    }
    getEndpoint() {
        switch (this.props.type) {
            case 'albums':
                return '/api/v1/albums';
            case 'singles':
                return '/api/v1/albums/singles';
            case undefined:
            default:
                return '/api/v1/albums/all';
        }
    }
    fetchData() {
        const endpoint = this.getEndpoint();
        API.get(endpoint)
            .then(res => {
                const musics = res.data;
                this.setState({ musics })
            });
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.fetchData();
        }
    }
    render() {
        return (
            <div>
                {this.state.musics.map(
                    (m, key) =>
                        <div key={m.id}>
                            <Album music={m} />
                            <Divide cur={key + 1} total={this.state.musics.length} />
                        </div>
                )}
            </div>
        )
    }
}

export default Music;
