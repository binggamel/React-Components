import React from 'react';
import { Card, Input, Form, Button, Col, Row, Selec, Space } from "antd";
import ButtonEdit from "./ButtonEdit";
import { AudioOutlined } from '@ant-design/icons';


const layout = {
    labelCol: {
      span: 5,
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
  

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 14,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = value => console.log(value);

function CreateClass2() {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    
    
    
    return (
        <div className="container" style={containerStyle}>
            <div style={divStyle}>
                <div className="wellcome" style={{ marginBottom: "10px" }} >
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQ3tzS%2FbtqVzSMYxv4%2F4hzWcE24Ty9EEgwtkr5ohK%2Fimg.png" alt="wellcomeEmoticon" style={{width:"160px"}}></img>
                    <p style={{marginBottom:"0"}}>축하합니다!</p>
                    <h2>교실이 만들어졌습니다! 코드나 초대링크를 학생들에게 보내주세요!</h2>
                </div>
                <Card style={cardStyle}>
                <p>교실 코드와 최대링크를 타인에 노출되지 않게 조심하세요!</p>
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
                        name="classCode"
                    >
                        <Search
                            placeholder="교실 코드 나오는 곳"
                            allowClear
                            enterButton="📄 코드 복사"
                            size="medium"
                            readOnly
                            onSearch={onSearch}
                        />
                    </Form.Item>
                    
                        
                        
                        
                    <Form.Item
                        label="교실 초대 링크"
                        name="classURL"
                    >
                        <Search
                            placeholder="교실 코드 링크 나오는 곳"
                            allowClear
                            enterButton="📄 링크 복사"
                            size="medium"
                            readOnly
                            onSearch={onSearch}
                        />
                    </Form.Item>

                    </Form>
                    <Button  style={{width: "290px", marginTop: "10px"}}> 내 교실 목록 가기</Button>
                </Card>
            </div>
        </div>
    )
}

export default CreateClass2;


const divStyle = {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
}

const cardStyle = {
   
    // top: "30%",
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