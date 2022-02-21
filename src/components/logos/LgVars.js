import React from 'react';

class VaWinter extends React.Component {
    render() {
        return <img alt='winter' src={process.env.PUBLIC_URL + '/static/img/varlogo/logo_winter.jpg'} />
    }
}

class VaNewYear extends React.Component {
    render() {
        return <img alt='new-year' src={process.env.PUBLIC_URL + '/static/img/varlogo/logo_ny.jpg'} />
    }
}

class VaSpring extends React.Component {
    render() {
        return <img alt='spring' src={process.env.PUBLIC_URL + '/static/img/varlogo/logo_spring.jpg'} />
    }
}

class VaAutumn extends React.Component {
    render() {
        return <img alt='autumn' src={process.env.PUBLIC_URL + '/static/img/varlogo/logo_autumn.jpg'} />
    }
}

class VaDefault extends React.Component {
    render() {
        return <img alt='default' src={process.env.PUBLIC_URL + '/static/img/varlogo/logo_main.jpg'} />
    }
}

export { VaWinter, VaNewYear, VaSpring, VaAutumn, VaDefault }
