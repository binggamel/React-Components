import React from 'react';
import { Card, Input, Form, Button, Select, Modal, Space } from "antd";
import ButtonEdit from "./ButtonEdit";
import styled from 'styled-components';
import { useState } from "react";

const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  

  function error() {
    Modal.error({
      title: '교실 코드가 올바르지 않습니다!',
      content: '제대로 입력을 했는지, 코드가 정확한지를 확인해 주세요',
    });
  }

function JoinClass() {



    const onFinish = (values) => {
        console.log('Success:', values);
        if (values.joinClassCode !== undefined || values.joinClassCode !== undefined) {
            console.log("입력값을 받음")
            
        } else {
            console.log("입력값을 안받음")
            error()
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
//     const [joinClassCode, rejoinClassCode] = useState('');
//     const [joinClassUrl, rejoinClassUrl] = useState('');
//     const [blockCheck, setBlockCheck] = useState(false);

    
//     const onJoinClassCode = (e) => {
//         rejoinClassCode(e.target.value);
//         console.log(rejoinClassCode(e.target.value));
//     }

//    const onJoinClassUrl = (e) => {
//         rejoinClassUrl(e.target.value);
    // }
    
    // const onCheck = () => {
    //     if (rejoinClassCode == '' && rejoinClassUrl == '') { setBlockCheck(true) }
    //     console.log('asdf')
    //   }
    
    

    return (
        <div className="container" style={containerStyle}>
            <Card style={cardStyle}>
                <p>코드 또는 링크를 입력해 주세요</p>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    style={formStyle}
                
                >
                    <Form.Item
                        label="교실 코드"
                        name="joinClassCode"
                    >
                        <Input value="" />
                    </Form.Item>

                    <Form.Item
                        label="교실 링크"
                        name="joinClassUrl"
                    >
                        <Input value="" />
                    </Form.Item>    
                        
                
                        

                    <Form.Item {...layout} >
                        <ButtonEdit edit="point_1" htmlType="submit" style={{ marginLeft: "55%"}}>
                                교실 등록하기
                        </ButtonEdit>
                    </Form.Item>
                    </Form>
            </Card>
             
        </div>
    )
}

export default JoinClass;

const cardStyle = {
    position: "absolute",
    top: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "710px",
    height: "250px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)",
    borderRadius: "2%",
    padding: "10px"
}

const containerStyle = {
    display: "flex",
    height: "100vh",
    margin: "0",
    justifyContent: "center",
    alignItems: "center"
}

const formStyle = {
    marginRight: "20px",
    textAlign : "none"
}
