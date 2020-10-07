import React from 'react'
import "./MessageBox.css"
import { Row, Col, Avatar, Typography } from 'antd';
const { Text } = Typography;

const MessageBox = () => {
    return (
        <Row className="MessageBox">
            <Col span={1} >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Col>

            <Col span={20} offset={1}>
                <Row className="textMessage">
                    <Text className="textMessageLabel">I'm planning a family vacation and would like to <Text className="TextGoalType">reserve dinner</Text>  at
                    Medieval Times in Buena Park, CA, for July 11, 2020 at an evening show for 2 adults,
                    3 kids below age 12. I do not need to pay for tickets (I already have vouchers paid) I
                    just want to reserve the seats. l'd prefer a 6 pm show, but am fine with anything
                 after 1pm.</Text>
                </Row>
                <Row>
                    <Text className="textDetalis" >
                        Herman Woods , 11:42 pm
                 </Text>
                </Row>
            </Col>

        </Row>
    )
}

export default MessageBox
