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
        fontSize: 16,
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
            <Card style={cardStyle}>
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
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Form.Item>
            
                <ButtonEdit edit="point_1" >코드 복사</ButtonEdit>
                       
                    
                    
                    
                <Form.Item
                    label="교실 초대 링크"
                    name="classURL"
                >
                    <Input readOnly/>
                </Form.Item>

                </Form>
                <Button  style={{width: "290px", marginTop: "20px"}}> 내 교실 목록 가기</Button>
            </Card>

        </div>
    )
}

export default CreateClass2;


const cardStyle = {
    position: "absolute",
    top: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "710px",
    height: "270px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16)",
    borderRadius: "2%",
    padding: "30px"
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