import { Divider } from "antd";
import React from "react";

class Divide extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Divider style={{'display': this.props.cur === this.props.total ? 'none' : ''}} />
        )
    }
}

export default Divide;
