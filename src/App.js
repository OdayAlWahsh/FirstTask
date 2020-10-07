import React from 'react';
import './App.css';
import { Divider } from 'antd';
import ScreenChat from '../src/components/Screen Chat/screenChat'
import ScreenGoal from '../src/components/Screen Goal/ScreenGoal'
import { Row, Col } from 'antd';
const App = () => {
  return (
    <Row >
      <Col style={{ background: '#f7f7f7', height: '100vh', width: '40%', paddingLeft: '60px', paddingRight: '60px' }}> <ScreenGoal /> </Col>
      <Divider style={{ position: 'fixed', marginLeft: '40%', marginBottom: '80px', bottom: 0 }} />
      <Col style={{ height: '100vh', width: '60%', paddingRight: '7%', paddingLeft: '7%' }}> <ScreenChat /> </Col>

    </Row>
  );
}

export default App;
