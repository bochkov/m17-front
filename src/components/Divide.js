import React from 'react';
import { Divider } from "antd";

export default function Divide(props) {
    return (
        <Divider style={{'display': props.cur === props.total ? 'none' : ''}} />
    )
}
