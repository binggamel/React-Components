import React from 'react';
import styled, {css} from 'styled-components';


const sizes = {
    large: {
      height: '3rem',
      fontSize: '1.25rem',
      polygon: '24px'
    },
    medium: {
      height: '2.25rem',
      fontSize: '1rem',
      polygon: '18px'
    },
    small: {
      height: '1.75rem',
      fontSize: '0.875rem',
      polygon: '14px'
    }
};
  
const sizeStyles = css`
    ${({ size }) => css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
      clip-path: polygon(${sizes[size].polygon} 0, calc(100% - ${sizes[size].polygon}) 0, 100% 0px, 100% calc(100% - 0px), calc(100% - 0px) 100%, ${sizes[size].polygon} 100%, 0 calc(100% - ${sizes[size].polygon}), 0 ${sizes[size].polygon});
    `}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      
      & + & {
        margin-left: 0rem;
        margin-top: 1rem;
      }
    `}
`;


const StyledBookMark = styled.div`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 2px;
  color: black;
  background-color:#3AEFFF;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1rem;
  align-items:center;
  box-shadow : 0px 1px 5px rgb(198, 198, 198);
  clip-path: polygon(17px 0, calc(100% - 14px) 0, 100% 0px, 100% calc(100% - 0px), calc(100% - 0px) 100%, 17px 100%, 0 calc(100% - 17px), 0 17px);
    


  /* 크기 */
  ${sizeStyles}


  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}

`;

function BookMark({ children, size, fullWidth, ...rest }) {
    return(
        <StyledBookMark
            size={size}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledBookMark>
    );
}

BookMark.defaultProps = {
  size:'medium'
}

export default BookMark;