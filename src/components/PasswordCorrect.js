import React from 'react';



const pwdCorrectStyle = {
    color: "#155724",
    backgroundColor: "#d4edda",
    borderColor: "#c3e6cb",
    borderRadius:"3px",
    padding: "7px",
    marginBottom: "15px"
}


function PasswordCorrect({ visible }) {

    if (!visible) return null;
    return (
        <div className="pwd-success" style={pwdCorrectStyle}>
            비밀번호가 일치합니다!
        </div>
    )

}

export default PasswordCorrect;