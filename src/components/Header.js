import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <img className='header__logo' alt='' 
                    src={process.env.PUBLIC_URL + '/static/img/header/header.jpg'} />
            </div>
        )
    }
}

export default Header;
