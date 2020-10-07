import React from 'react'
import { Row, Col, Typography, Popover, Steps } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SingleGoal from './SingleGoalButton'
import './ContentTheGoal.css'

const { Step } = Steps;
const { Text, Title } = Typography;
const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

const ContentTheGoal = () => {
    return (
        <Col span={24} >
            <Row className="Steps" >
                <Col span={1} style={{ height: '0px' }}>
                    <Steps size="small" current={0} progressDot={customDot} >
                        <Step />
                        <Step />
                        <Step />
                    </Steps>

                </Col>
            </Row>

            <Row style={{ marginTop: '70px' }} >
                <Title style={{ fontSize: "20px", fontWeight: 'bold' }}>What's the goal?</Title>
            </Row>

            <Row >
                <Text style={{ fontSize: '13px' }}>Single Goal <DownOutlined style={{ fontSize: '8px' }} /></Text>
            </Row>

            <Row style={{ marginTop: '40px' }}>
                <SingleGoal title="Reserve Dinner" type="primary" color="#3ebfcf" />
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <SingleGoal title="Plan a vacation" />
            </Row>
            <Row style={{ marginTop: '20px' }}>
                <SingleGoal title="Pay for tickets" />
            </Row>
            <Row style={{ marginTop: '30px' }}>
                <SingleGoal title="Show More" type="text" size="small" />
            </Row>

        </Col>
    )
}

export default ContentTheGoal
