import React from 'react';
import { Alert } from 'antd';




function PasswordCorrect({ visible }) {

    if (!visible) return null;
    return (
        <Alert message="비밀번호가 일치합니다!" type="success" showIcon style={{marginLeft: "45px",width:"348px"}}/>
    )

}

export default PasswordCorrect;