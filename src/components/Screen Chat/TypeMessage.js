import React from 'react'
import { Row, Col, Divider, Typography, Input } from 'antd';
import "./TypeMessage.css"
const TypeMessage = () => {
    return (
        <Row >
           

            <Col span={24}   className="footer"   >
                <Input placeholder="Type a Message"  className="input"  />
            </Col>

        </Row>
    )
}

export default TypeMessage
