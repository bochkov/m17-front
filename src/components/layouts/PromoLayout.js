'use client'

import PropTypes from 'prop-types';

import YandexMetrika from '@/components/util/YaMetrika';

PromoLayout.propTypes = {
    children: PropTypes.object.isRequired
}

export default function PromoLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <YandexMetrika yid="87547729" clickmap="true" trackLinks="true" accurateTrackBounce="true" webvisor="true" />
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}