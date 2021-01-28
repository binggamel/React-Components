import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import UserImg from './UserImg';
import ButtonEdit from './ButtonEdit';

const ProfileBackground = styled.div`
    position: fixed;
    z-index: -1;
    left:0px;
    top:0px;
    width: 100vw;
    height: 100vw;
    align-items: center;
    justify-content: center;
    background: initial;
`;


const ProfileBlock = styled.div`
  z-index: 2;
  position: absolute;
  right : 70px;
  top : 72px;
  width: 300px;
  height:300px;
  border-radius: 5px;

`;

const ProfileFrame = styled.div`
  width: 300px;
  height:227px;
  background-color : white;
  padding: 20px;
  float: left;
  border-radius : 5px;
  box-shadow : 0px 3px 7px rgb(198, 198, 198)
`

const ProfileUserData = styled.div`
  margin-left : 70px;
  margin-top : 10px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

`

const Group = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const CreateClassStyle = {
    marginTop: "10px"
}

const btnStyle = {
    marginTop: "40px"
}

function Profile({ title, children, onCancel, visible }) {
    if (!visible) return null;
    return (
        <>
        <div className='toDisplay'>
            <ProfileBlock >
                <ProfileBackground onClick={onCancel}/>
                
                <ProfileFrame>
                    <UserImg size="large"/>
                    <ProfileUserData>
                        <h3>{title}</h3>
                        <p>{children}</p>
                    </ProfileUserData>

                    <Group style={btnStyle}>
                        <Button block>내 정보 보기</Button>
                    </Group>
                    <Group>
                        <Button block>로그 아웃</Button>
                    </Group>
                        
                </ProfileFrame>
                    
                
                <ButtonEdit style={CreateClassStyle} block edit="point_1">교실 개설하기</ButtonEdit>
               
                    

            </ProfileBlock>
        </div>

            
        
        </>
    );
}

Profile.defaultProps = {
}

export default Profile;
    