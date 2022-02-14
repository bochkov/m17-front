import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faItunesNote, faSpotify, faVk, faYandex } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urls: [
                {
                    'url': 'mailto:band_m17@mail.ru',
                    'cn': <FontAwesomeIcon icon={faEnvelope} />
                },
                {
                    'url': 'https://vk.com/band_m17',
                    'cn': <FontAwesomeIcon icon={faVk} />
                },
                {
                    'url': 'https://www.instagram.com/band_m17/',
                    'cn': <FontAwesomeIcon icon={faInstagram} />
                },
                {
                    'url': 'https://open.spotify.com/artist/60Utw1lKdWMXTWONojuscQ',
                    'cn': <FontAwesomeIcon icon={faSpotify} />
                },
                {
                    'url': 'https://music.yandex.ru/artist/5259810',
                    'cn': <FontAwesomeIcon icon={faYandex} />
                },
                {
                    'url': 'https://music.apple.com/ru/artist/m17/1266716485',
                    'cn': <FontAwesomeIcon icon={faItunesNote} />
                },
            ]
        }
    }
    year() {
        var ystr = "";
        var y = new Date().getFullYear();
        if (y > 2019) {
            ystr = " &ndash; " + y
        }
        return "&copy; 2019" + ystr + ", M17"
    }
    render() {
        return (
            <div className='contacts'>
                {this.state.urls.map((url, key) =>
                    <Button className='contacts__link' size='large'
                        key={key} icon={url.cn} shape="circle" type='link'
                        href={url.url} target='_blank' rel='noreferrer' />
                )}
                <p className='contacts__copyright' dangerouslySetInnerHTML={{ __html: this.year() }}></p>
            </div>
        )
    }
}

export default Footer;
