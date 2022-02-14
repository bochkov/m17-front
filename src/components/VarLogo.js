import React from "react";
import './VarLogo.css';

class VarLogo extends React.Component {
    srcof() {
        var dt = new Date();
        // 0 - jan, 1 - feb, 2 - mar, etc
        switch(dt.getMonth()) {
            case 0:
            case 1:
            case 11:
                if ((dt.getMonth() === 11 && dt.getDate() > 20) || (dt.getMonth() === 0 && dt.getDate() < 10))
                    return '/static/img/varlogo/logo_ny.jpg';
                else
                    return '/static/img/varlogo/logo_winter.jpg'
            case 2:
            case 3:
            case 4:
                return '/static/img/varlogo/logo_spring.jpg';
            case 5:
            case 6:
            case 7:
                return '/static/img/varlogo/logo_main.jpg';
            case 8:
            case 9:
            case 10:
                return '/static/img/varlogo/logo_autumn.jpg';
            default:
                return '/static/img/varlogo/logo_main.jpg';

        }
    }
    render() {
        return (
            <div className="varlogo">
                <img className="varlogo__logo" src={process.env.PUBLIC_URL + this.srcof()} alt='' />
            </div>
        )
    }
}

export default VarLogo;
