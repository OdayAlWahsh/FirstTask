import React from 'react'
import { Row, Col, Divider, Typography, Input, Button } from 'antd';
import "./ButtonFooter.css"
const ButtonFooter = () => {
    return (
        <Row  className="Buttonfooter" >
            <Col span={1}  >
                <Button  type="primary" ghost style={{color:'#000000',borderColor:'#000000'}}>
                    Can't proceed
                </Button>

            </Col>
            <Col span={1} offset={18}>
                <Button   style={{color:'#FFFFFF',backgroundColor:'#000000'}}>
                    Confirm Goal
                </Button>
            </Col>
        </Row>
    )
}

export default ButtonFooter
