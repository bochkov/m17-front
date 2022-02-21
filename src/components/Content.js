import React from 'react';
import { NavLink, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

import News from './News';
import Gigs from './Gigs';
import Music from './Music';
import Tech from './Tech';

const { SubMenu } = Menu;
const centerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5em 0',
}

function Content() {
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
                <SubMenu key='musicSubmenu' title="Музыка">
                    <Menu.Item key='music'>
                        <NavLink to='/music'>Все</NavLink>
                    </Menu.Item>
                    <Menu.Item key='music/albums'>
                        <NavLink to='/music/albums'>Альбомы</NavLink>
                    </Menu.Item>
                    <Menu.Item key='music/singles'>
                        <NavLink to='/music/singles'>Синглы</NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key='tech'>
                    <NavLink to='/tech'>Ресурсы</NavLink>
                </Menu.Item>
            </Menu>
            <Routes>
                <Route path='/news' element={<News />} />
                <Route path='/gigs' element={<Gigs />} />
                <Route index path='/music' element={<Music />} />
                <Route path='/music/singles' element={<Music type='singles' />} />
                <Route path='/music/albums' element={<Music type='albums' />} />
                <Route path='/tech' element={<Tech />} />
                <Route path='*' element={<Navigate to='/music' />} />
            </Routes>
        </div>
    )
}

export default Content;
