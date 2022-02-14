import React from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import News from './News';
import Gigs from './Gigs';
import Music from './Music';
import Tech from './Tech';

import './Content.css';

const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5em 0',
}

function Content () {
    let location = useLocation();
    return (
        <div>
            <Menu style={centerStyle} mode='horizontal' selectedKeys={[location.pathname.substring(1)]}>
                <Menu.Item key='news'>
                    <NavLink to='/news'>Новости</NavLink>
                </Menu.Item>
                <Menu.Item key='gigs'>
                    <NavLink to='/gigs'>Афиша</NavLink>
                </Menu.Item>
                <Menu.Item key='music'>
                    <NavLink to='/music'>Музыка</NavLink>
                </Menu.Item>
                <Menu.Item key='tech'>
                    <NavLink to='/tech'>Ресурсы</NavLink>
                </Menu.Item>
            </Menu>
            <Routes>
                <Route index path='/news' element={<News />} />
                <Route path='/gigs' element={<Gigs />} />
                <Route path='/music' element={<Music />} />
                <Route path='/tech' element={<Tech />} />
                <Route path='*' element={<Navigate to='/news' />} />
            </Routes>
        </div>
    )
}

export default Content;
