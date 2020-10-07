import React from 'react'
import MessageBox from './MessageBox'
import TypeMessage from './TypeMessage'
import { Row, Col, Avatar,Divider } from 'antd';

const screenChat = () => {
    return (
        <div>
            <Col span={24} >
                <MessageBox />
               
                <TypeMessage />
            </Col>
         

        </div>
    )
}

export default screenChat
