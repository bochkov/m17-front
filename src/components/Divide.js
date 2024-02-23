import React from 'react';
import { Divider } from "antd";

export default function Divide(props) {
    return (
        props.cur === props.total ?
            <></> :
            <Divider />
    )
}
