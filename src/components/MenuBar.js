'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'antd';

import './MenuBar.css'

export default function MenuBar() {
    const pathname = usePathname()
    const items = [
        { label: <Link href='/gigs'>Афиша</Link>, key: 'gigs' },
        {
            label: 'Музыка', key: 'musicSubmenu', children: [
                { label: <Link href='/music'>Все</Link>, key: 'music' },
                { label: <Link href='/music/albums'>Альбомы</Link>, key: 'music/albums' },
                { label: <Link href='/music/singles'>Синглы</Link>, key: 'music/singles' },
            ]
        },
        { label: <Link href='/lyrics'>Тексты</Link>, key: 'lyrics' },
        { label: <Link href='/tech'>Ресурсы</Link>, key: 'tech' }
    ]

    return (
        <div className='menubar'>
            <Menu className='menu' mode='horizontal' selectedKeys={[pathname.substring(1)]} items={items} />
        </div>
    )
}
