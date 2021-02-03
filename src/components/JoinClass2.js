import React from 'react';
import { Card, Input, Form, Button, Col, Row, Selec, Space } from "antd";
import ButtonEdit from './ButtonEdit';

function JoinClass2() {
    return (
        <div className="container" style={containerStyle}>
            <div style={divStyle}>
                <div className="wellcome" style={{ marginBottom: "10px" }} >
                    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQ3tzS%2FbtqVzSMYxv4%2F4hzWcE24Ty9EEgwtkr5ohK%2Fimg.png" alt="wellcomeEmoticon" style={{width:"160px"}}></img>
                    <p style={{marginBottom:"0"}}>축하합니다!</p>
                    <h2>교실에 등록되었습니다!</h2>
                    <h2>내 교실 목록으로 돌아가 수업에 참여해 보세요</h2>
                    <ButtonEdit edit="point_1" style={{marginTop:"20px"}}>내 교실 목록 가기</ButtonEdit>
                </div>
            </div>
        </div>
    )
}

export default JoinClass2;

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