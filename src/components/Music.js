import React from 'react';
import API from './Api';
import Divide from './Divide';
import './Music.css';

class AlbumLink extends React.Component {
    imgurl(lid) {
        switch (lid) {
            case 1: return '/static/img/provider/yandex-music.png';
            case 2: return '/static/img/provider/apple-music.svg';
            case 3: return '/static/img/provider/spotify.png';
            case 4: return '/static/img/provider/youtube.svg';
            case 5: return '/static/img/provider/vk.svg';
            default: return '';
        }
    }
    render() {
        return (
            <a href={this.props.link.url} target='_blank' rel='noreferrer'>
                <img className='album__link__provider invert' alt=''
                    src={process.env.PUBLIC_URL + this.imgurl(this.props.link.provid)} />
            </a>
        )
    }
}

class Album extends React.Component {
    render() {
        return (
            <div className='album'>
                <span className='album__title'>{this.props.music.name}</span><br />
                <span className='album__year'>{this.props.music.year}</span><br />
                <img className='album__cover'
                    src={process.env.PUBLIC_URL + '/static/img/music/' + this.props.music.slug + '.png'} alt='' /><br />
                <span>{this.props.music.links.map(link => <AlbumLink key={link.id} link={link} />)}</span>
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
