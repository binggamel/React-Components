import { Button } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';

const edits = {
    point_1: {
        backgroundcolor: '#719DFF',
        color:'white'
    },
    point_2: {
        backgroundcolor: '#3AEFFF',
        color:'black'
    }
  };
  
  const editStyles = css`
    ${({ edit }) => css`
      background-color: ${edits[edit].backgroundcolor};
      color: ${edits[edit].color};
      
      &:hover {
        background-color: ${edits[edit].backgroundcolor};
        color: ${edits[edit].color};
      }
    `}
  `;
  


  
const StyledEditButton = styled(Button)`
  font-weight : bold;
  ${editStyles}

`


function ButtonEdit({ children, edit,...rest }) {
    return (
      <StyledEditButton
        edit={edit}
        {...rest}
      >
        {children}
      </StyledEditButton>
    );
  }
  
  ButtonEdit.defaultProps = {
    color: 'blue',
    size: 'medium'
  };
  
  export default ButtonEdit;

