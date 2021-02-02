import React from 'react';

const backgroundStyle = {
    background: "linear-gradient(-80deg, #fff7f3 45%, white 0)",
    height: "100vh",
    width: "100vw"
}

const containerImgStyle = {
    display: "block",
    position: "relative",
    top: "25%",
    float: "right",
    paddingRight: "40vw"
}

function BackGround() {
    return (
        <div className="container-back" style={backgroundStyle}>
            <div className="container-img" style={containerImgStyle} >
                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fct7eUG%2FbtqTF25H8JT%2F2SmIXMuUuFndjnep9aIDu0%2Fimg.png" alt="Move Your Mind. MYM EDU" style={{ width: 470}}/>
            </div>
             
        </div>
    )
}

export default BackGround;