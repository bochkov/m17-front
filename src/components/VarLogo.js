import React from "react";

import { VaWinter, VaNewYear, VaSpring, VaAutumn, VaDefault } from './logos/LgVars';

import './VarLogo.css';

class VarLogo extends React.Component {
    srcof() {
        let dt = new Date();
        // 0 - jan, 1 - feb, 2 - mar, etc
        switch (dt.getMonth()) {
            case 0:
            case 1:
            case 11:
                if ((dt.getMonth() === 11 && dt.getDate() > 20) || (dt.getMonth() === 0 && dt.getDate() < 10))
                    return <VaNewYear />
                else
                    return <VaWinter />
            case 2:
            case 3:
            case 4:
                return <VaSpring />
            case 5:
            case 6:
            case 7:
                return <VaDefault />
            case 8:
            case 9:
            case 10:
                return <VaAutumn />
            default:
                return <VaDefault />
        }
    }
    render() {
        return (
            <div className="varlogo__logo">
                {this.srcof()}
            </div>
        )
    }
}

export default VarLogo;
