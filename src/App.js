import logo from './logo.svg';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import BookMark from './components/BookMark';
import { Card, Avatar } from 'antd';
import UserImg from './components/UserImg';

const { Meta } = Card;



const ButtonGroup = styled.div`
  & + & {
    margin-left: 1rem;
  }
`;

function App() {

  const [profile, setProfile] = useState(false);
  const onClick = () => {
    console.log('okay')
    setProfile(true);
  }
  const onCancel = () => {
    console.log('cancel')
    setProfile(false);
  }

  return (
    <div className="App">
      <ButtonGroup>
        <Button type="primary" onClick={onClick}>ProFile</Button>
        <BookMark >온라인 강의실 입장</BookMark>
        <Profile title="user name" onCancel={onCancel} visible={profile}>사용자 프로필 확인</Profile>
      </ButtonGroup>

      
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />}
      >
        <Meta
          avatar={<UserImg size='small'/>}
          title="예비 고2 심화반"
          description="** 공지사항 나올곳 **"
        />
      </Card>

    </div>
  );
}

export default App;
