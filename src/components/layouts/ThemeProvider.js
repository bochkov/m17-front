'use client'

import PropTypes from 'prop-types';

import YandexMetrika from '@/components/util/YaMetrika';

import { Oswald } from 'next/font/google';
import { ConfigProvider } from 'antd';

const oswald = Oswald({
    subsets: ['cyrillic'],
    weight: '300',
    display: 'swap'
});

ThemeProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default function ThemeProvider({ children }) {
    return (
        <html lang="en">
            <head>
                <YandexMetrika yid="87547729" clickmap="true" trackLinks="true" accurateTrackBounce="true" webvisor="true" />
            </head>
            <body className={oswald.className}>
                <ConfigProvider
                    theme={{
                        token: {
                            colorLink: '#8b0000',
                            colorPrimary: '#8b0000', // darkred
                            colorTextBase: '#020304',
                            fontFamily: `${oswald.style.fontFamily}`
                        }
                    }}
                >
                    {children}
                </ConfigProvider>
            </body>
        </html>
    )
}