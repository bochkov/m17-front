'use client'

import YandexMetrika from 'next-yandex-metrika';

export default function PromoLayout({children}) {
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