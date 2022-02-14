import React from 'react';
import './Tech.css';
import VarLogo from './VarLogo';

class Tech extends React.Component {
    render() {
        return (
            <div>
                <VarLogo />
                <p/>
                <a href={process.env.PUBLIC_URL + '/static/assets/tech_rider.pdf'}
                    target='_blank' rel='noreferrer'>
                        Технический райдер группы
                    </a>
            </div>
        )
    }
}

export default Tech;
