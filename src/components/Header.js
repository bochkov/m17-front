import React from 'react';
import './Header.css';

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                {/*<div className="header__logo"></div>*/}
                <section className="layers">
                    <div className="layers__container">
                        <div className="layers__item layer-1" style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/static/img/header/header3.jpg)"}}></div>
                        <div className="layers__item layer-2"></div>
                        <div className="layers__item layer-3">
                            {/*
                            <div className="hero-content">
                                <h1>Natural forest <span>nim/go</span></h1>
                                <div className="hero-content__p">kkkkmmmdflldf</div>
                            </div>
                            */}
                        </div>
                        <div className="layers__item layer-4">
                            <canvas className="rain"></canvas>
                        </div>
                        <div className="layers__item layer-5"></div>
                        <div className="layers__item layer-6"></div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Header;
