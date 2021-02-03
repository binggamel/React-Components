
import { Button } from 'antd';

import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import BookMark from './components/BookMark';
import { Card, Avatar } from 'antd';
import UserImg from './components/UserImg';
import SignUp from './components/SignUp';
import BackGround from './components/BackGround';
import ButtonEdit from './components/ButtonEdit';
import CreateClass2 from './components/CreateClass2';
import CreateClass from './components/CreateClass';
import JoinClass from './components/JoinClass';
import JoinClass2 from './components/JoinClass2';


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
        <ButtonEdit edit="point_1" onClick={onClick}>ProFile</ButtonEdit>
        <ButtonEdit edit="point_3">Create Class</ButtonEdit>
        <BookMark >온라인 강의실 입장</BookMark>
        <Profile title="user name" onCancel={onCancel} visible={profile}>사용자 프로필 확인</Profile>
      </ButtonGroup>

      
      <JoinClass2></JoinClass2>


    </div>
    
  );
}

export default App;

{/* <Card
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
</Card> */}