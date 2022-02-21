import React from 'react';

class LgYandex extends React.Component {
    render() {
        return <img alt='ya.music' src={process.env.PUBLIC_URL + '/static/img/provider/yandex-music.png'} />
    }
}

class LgYandexColor extends React.Component {
    render() {
        return <img alt='ya.music' src={process.env.PUBLIC_URL + '/static/img/provider/yandex-music-color.png'} />
    }
}

class LgAppleMusic extends React.Component {
    render() {
        return <img alt='apple.music' src={process.env.PUBLIC_URL + '/static/img/provider/apple-music.svg'} />
    }
}

class LgAppleMusicColor extends React.Component {
    render() {
        return <img alt='apple.music' src={process.env.PUBLIC_URL + '/static/img/provider/apple-music-color.svg'} />
    }
}

class LgSpotify extends React.Component {
    render() {
        return <img alt='spotify' src={process.env.PUBLIC_URL + '/static/img/provider/spotify.png'} />
    }
}

class LgSpotifyColor extends React.Component {
    render() {
        return <img alt='spotify' src={process.env.PUBLIC_URL + '/static/img/provider/spotify-color.png'} />
    }
}

class LgYoutube extends React.Component {
    render() {
        return <img alt='youtube' src={process.env.PUBLIC_URL + '/static/img/provider/youtube.svg'} />
    }
}

class LgYoutubeColor extends React.Component {
    render() {
        return <img alt='youtube' src={process.env.PUBLIC_URL + '/static/img/provider/youtube-color.svg'} />
    }
}

class LgVkMusic extends React.Component {
    render() {
        return <img alt='vk.music' src={process.env.PUBLIC_URL + '/static/img/provider/vk.svg'} />
    }
}

class LgVkMusicColor extends React.Component {
    render() {
        return <img alt='vk.music' src={process.env.PUBLIC_URL + '/static/img/provider/vk-color.svg'} />
    }
}

export { LgYandex, LgYandexColor }
export { LgAppleMusic, LgAppleMusicColor }
export { LgSpotify, LgSpotifyColor }
export { LgYoutube, LgYoutubeColor }
export { LgVkMusic, LgVkMusicColor }
