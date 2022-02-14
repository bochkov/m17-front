import React from 'react';
import './Promo.css';
import API from './Api';

class AlbumLink extends React.Component {
    imgurl(lid) {
        switch (lid) {
            case 1: return '/static/img/provider/yandex-music-color.png';
            case 2: return '/static/img/provider/apple-music-color.svg';
            case 3: return '/static/img/provider/spotify-color.png';
            case 4: return '/static/img/provider/youtube-color.svg';
            case 5: return '/static/img/provider/vk-color.svg';
            default: return '';
        }
    }
    render() {
        return (
            <a href={this.props.link.url} target='_blank' rel='noreferrer'>
                <img className='promo__album__link__provider' alt=''
                    src={process.env.PUBLIC_URL + this.imgurl(this.props.link.provid)} />
            </a>
        )
    }
}

class Album extends React.Component {
    render() {
        return (
            <div className='promo__album'>
                <img className='promo__album__cover'
                    src={process.env.PUBLIC_URL + '/static/img/music/' + this.props.music.slug + '.png'}
                    alt='' /><br />
                <span>
                    {this.props.music.links.map(link => <AlbumLink key={link.id} link={link} />)}
                </span>
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
