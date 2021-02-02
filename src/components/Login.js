import React from 'react';
import { Form, Input, Button, Checkbox, Select, Card } from 'antd';
import ButtonEdit from './ButtonEdit';
import { useState } from "react";
import PasswordError from './PasswordError';
import PasswordCorrect from './PasswordCorrect';


const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 20,
  },
};

const { Option } = Select;

function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }



function Login() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    const [password, setPassword] = useState('');
    console.log(password);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
    const [passwordCorrectMessage, setPasswordCorrectMessage] = useState(false);


    
    const passwordOnChange = (e) => {
        setPassword(e.target.value)
        console.log(setPassword(e.target.value));
    }
    
    const handleConfirmPassword = (e) => {
        const { value } = e.target; //confirmPassword 현재 값 
        console.log(value);
        setPassword(password);
        console.log(setPassword(password) + " ~here");
        if (value !== password) {
            console.log("not correct");
            setPasswordCorrectMessage(false);
            setPasswordErrorMessage(true);
            
        } else {
            console.log("correct");
            setPasswordCorrectMessage(true);
            setPasswordErrorMessage(false);

        };
    };
    



    return (
        <>
        <div className="container-back" style={backgroundStyle}>
            <div className="container-img" style={containerImgStyle} >
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fct7eUG%2FbtqTF25H8JT%2F2SmIXMuUuFndjnep9aIDu0%2Fimg.png" alt="Move Your Mind. MYM EDU" style={{ width: 650}}/>
            </div>
            
    <Card  title="지금 가입하세요 😊" style={cardStyle}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
        <Form.Item
        rules={[{
            required: true,
            message: '역할을 골라 주세요!'}
        ]}
                label="역할"
                name="roles"
        >
         <Select
            showSearch
            block
            placeholder="역할을 골라주세요!"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            
            >
            <Option value="Student">학생</Option>
            </Select>   
        </Form.Item>            

          <Form.Item
            label="이름"
            name="username"
            rules={[
              {
                required: true,
                message: '이름을 입력해 주세요',
              },
            ]}
          >
            <Input />
            </Form.Item>
                
            <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: '이메일을 입력해 주세요',
              },
            ]}
          >
            <Input  type="email"/>
          </Form.Item>
    
          <Form.Item
            label="비밀번호"
            name="password1"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해 주세요',
              },
            ]}
            
          >
            <Input.Password
                value={password}
                onChange={passwordOnChange}
            />
            
            </Form.Item>
                
            <noscript>비밀번호 다시 확인</noscript>
          <Form.Item
            label="비밀번호 확인"
            name="password2"
            rules={[
              {
                required: true,
                message: '비밀번호를 다시 한번 입력해 주세요',
              },
            ]}
           
          >
            <Input.Password
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
            />
            
            </Form.Item>
                        
        
                <PasswordError visible={passwordErrorMessage} />
                <PasswordCorrect visible={passwordCorrectMessage}/>
    
          
            <Form.Item {...layout} >
                <ButtonEdit edit="point_1" block htmlType="submit" style={{ marginLeft: "45px", marginTop:"20px"}} >
                회원가입
                </ButtonEdit>
            </Form.Item>

        </Form>

        
            </Card>

        </div>
        </>
      );
}


const backgroundStyle = {
    background: "linear-gradient(-80deg, #fff7f3 60%, white 0)",
    height: "100vh",
    width: "100vw"
}

const containerImgStyle = {
    display: "block",
    position: "relative",
    top: "25%",
    float: "right",
    marginRight: "45vw"
}

const cardStyle = {
    position: "absolute",
    top: "10vw",
    right: "0",
    marginRight: "15vw",
    width: "470px",
    height: "450px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    borderRadius: "3%"
}




    


export default Login;