import React from 'react';
import styled, { css } from 'styled-components';
import cover from "../img/UserImg.jpeg"

const sizes = {
    large: {
        height: '80px',
        width: '80px'
    },
    
      medium: {
        height: '60px',
        width: '60px'
    },
      
      small: {
        height: '40px',
        width: '40px'
      }
}

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    width: ${sizes[size].width};
  `}
`;

//사진크기
const UserImgImg = styled.div`
    float:left;
    border-radius: 80%;
    overflow: hidden;

    /* size */
    ${sizeStyles}

`;

//사진
const UserImgImgImg = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`


function UserImg({ size, ...rest }) {
    return (
        <UserImgImg
            size={size}
            {...rest}
        >
            <UserImgImgImg src={cover} alt="user-profile-img"></UserImgImgImg>
       </UserImgImg>
    )
}

UserImg.defaultProps = {
    size: 'large'
  };

export default UserImg;