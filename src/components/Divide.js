import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from "antd";

Divide.propTypes = {
    cur: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default function Divide(props) {
    return (
        props.cur === props.total ?
            <></> :
            <Divider />
    )
}
