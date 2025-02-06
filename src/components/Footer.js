import React from 'react';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faItunesNote, faSpotify, faVk, faYandex } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Footer.css';

export default function Footer() {
    const urls = [
        {
            'id': 1,
            'url': 'mailto:m17@m17.online',
            'cn': <FontAwesomeIcon icon={faEnvelope} />
        },
        {
            'id': 2,
            'url': 'https://vk.com/band_m17',
            'cn': <FontAwesomeIcon icon={faVk} />
        },
        {
            'id': 3,
            'url': 'https://t.me/m17_band',
            'cn': <FontAwesomeIcon icon={faTelegram} />
        },
        {
            'id': 4,
            'url': 'https://www.instagram.com/band_m17/',
            'cn': <FontAwesomeIcon icon={faInstagram} />
        },
        {
            'id': 5,
            'url': 'https://open.spotify.com/artist/60Utw1lKdWMXTWONojuscQ',
            'cn': <FontAwesomeIcon icon={faSpotify} />
        },
        {
            'id': 6,
            'url': 'https://music.yandex.ru/artist/5259810',
            'cn': <FontAwesomeIcon icon={faYandex} />
        },
        {
            'id': 7,
            'url': 'https://music.apple.com/ru/artist/m17/1266716485',
            'cn': <FontAwesomeIcon icon={faItunesNote} />
        },
    ]

    const year = () => {
        let ystr = "";
        let y = new Date().getFullYear();
        if (y > 2019) {
            ystr = " &ndash; " + y
        }
        return "&copy; 2019" + ystr + ", M17"
    }

    return (
        <div className='contacts'>
            {urls.map((url) =>
                <Button className='contacts__link' size='large'
                    key={url.id} icon={url.cn} shape="circle" type='link'
                    href={url.url} target='_blank' rel='noreferrer' />
            )}
            <p className='contacts__copyright' dangerouslySetInnerHTML={{ __html: year() }}></p>
        </div>
    )
}
