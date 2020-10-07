import React from 'react'
import { Row, Col, Typography, Popover, Steps,Button } from 'antd';
const SingleGoal = (props) => {
    return (
        <Button type={props.type} size={props.siza}  style={{backgroundColor:""+props.color+""}}>
            {props.title}
        </Button>
    )
}

export default SingleGoal
