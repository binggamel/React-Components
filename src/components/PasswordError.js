import React from 'react';


const pwdIncorrectStyle = {
    color: "#721c24",
    backgroundColor: "#f8d7da",
    borderColor: "#f5c6cb",
    borderRadius:"3px",
    padding: "7px",
    marginBottom: "15px"
}



function PasswordError({ visible }) {
    if (!visible) return null;
    return (
        <div className="pwd-danger" style={pwdIncorrectStyle}>
             비밀번호가 일치하지 않습니다!
        </div>
    )
}

export default PasswordError;