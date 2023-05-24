import React from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import Gigs from './Gigs';
import Music from './Music';
import Tech from './Tech';

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5em 0',
}

function Content() {
    const items = [
        {label: <NavLink to='/gigs'>Афиша</NavLink>, key: 'gigs'},
        {label: 'Музыка', key: 'musicSubmenu', children: [
            {label: <NavLink to='/music'>Все</NavLink>, key: 'music'},
            {label: <NavLink to='/music/albums'>Альбомы</NavLink>, key: 'music/albums'},
            {label: <NavLink to='/music/singles'>Синглы</NavLink>, key: 'music/singles'},
        ]},
        {label: <NavLink to='/tech'>Ресурсы</NavLink>, key: 'tech'}
    ]
    let location = useLocation();
    return (
        <div>
            <Menu style={centerStyle} mode='horizontal' 
                selectedKeys={[location.pathname.substring(1)]}
                items={items} />
            <Routes>
                <Route index path='/gigs' element={<Gigs />} />
                <Route path='/music' element={<Music />} />
                <Route path='/music/singles' element={<Music type='singles' />} />
                <Route path='/music/albums' element={<Music type='albums' />} />
                <Route path='/tech' element={<Tech />} />
                <Route path='*' element={<Navigate to='/gigs' />} />
            </Routes>
        </div>
    )
}

export default Content;
