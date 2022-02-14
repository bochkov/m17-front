import React from 'react';
import { Divider } from "antd";

class Divide extends React.Component {
    render() {
        return (
            <Divider style={{'display': this.props.cur === this.props.total ? 'none' : ''}} />
        )
    }
}

export default Divide;
