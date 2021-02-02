import React from 'react';
import { Alert } from 'antd';





function PasswordError({ visible }) {
    if (!visible) return null;
    return (
        <Alert message="비밀번호가 일치하지 않습니다!" type="error" showIcon style={{marginLeft: "45px",width:"348px"}}/>
    )
}

export default PasswordError;