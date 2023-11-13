import { Oswald } from 'next/font/google';
import { ConfigProvider } from 'antd';
import YandexMetrika from '@/components/util/YaMetrika'

const oswald = Oswald({
    subsets: ['cyrillic'],
    weight: '300',
    display: 'swap'
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <YandexMetrika yid="87547729" clickmap="true" trackLinks="true" accurateTrackBounce="true" webvisor="true" />
            </head>
            <body className={oswald.className}>
            <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: 'white',
                        colorPrimary: 'darkred',
                        colorText: '#020304',
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