import React from 'react';
import { Card, Input, Form, Button, Select } from "antd";
import ButtonEdit from "./ButtonEdit";
import styled from 'styled-components';

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
  

const { TextArea } = Input;



function CreateClass() {

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
                    label="📌 교실 이름"
                    name="className"
                    rules={[
                    {
                        required: true,
                        message: '교실 이름을 정해주세요!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                rules={[{
                    required: true,
                    message: '교실 분류를 선택해 주세요!'}
                ]}
                        label="📌 교실 분류"
                        name="classCategory"
                >
                <Select
                    showSearch
                    block
                    placeholder="교실 분류를 선택해 주세요!"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    
                    >
                            <Option value=" 1 ">초등</Option>
                            <Option value=" 2 ">중등</Option>
                            <Option value=" 3 ">고등</Option>
                            <Option value=" 4 ">특강</Option>
                            <Option value=" 5 ">기타</Option>
                    </Select>   
                </Form.Item>
                    

                <Form.Item
                    label="교실 설명"
                    name="classExplain"
                >
                    <TextArea rows={3} /> 
                        
                </Form.Item>
                    
            
                    

                <Form.Item {...layout} >
                    <ButtonEdit edit="point_1" htmlType="submit" style={{ marginLeft: "55%"}}>
                            교실 개설하기
                    </ButtonEdit>
                </Form.Item>
                </Form>
            </Card>
             
        </div>
    )
}

export default CreateClass;

const cardStyle = {
    position: "absolute",
    top: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "710px",
    height: "320px",
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
