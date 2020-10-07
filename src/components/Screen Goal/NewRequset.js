import React from 'react'
import { Row, Col, Avatar, Typography } from 'antd';
import IconStuff from '../../icons/iconStuff.jpg'
import { QuestionCircleOutlined } from '@ant-design/icons';
import './NewRequset.css'

const { Text } = Typography;


const NewRequset = () => {
    return (
        <Row className="NewRequset">
            <Col span={2}  >
                <Avatar src={IconStuff} style={{ fontSize: '30px' }} size="large" />
            </Col>

            <Col span={20} offset={1} style={{ display: 'flex', alignItems: 'center' }}>

                <Row style={{ textAlign: 'center' }}>
                    <Text style={{ fontWeight: 'bold',fontSize:'12px' }} >
                        New Request
                   </Text>
                </Row>
            </Col>

            <Col span={1} style={{ display: 'flex', alignItems: 'center' }}  >
                <Row justify="end">
                    <QuestionCircleOutlined style={{ fontSize: '17px', color: '#BDBBBB' }} />
                </Row>

            </Col>
        </Row>
    )
}

export default NewRequset
