import React from 'react';
import styled from 'styled-components';

const FormContains = styled.div`
    background-color: var(--darkColor1);
    min-width: 300px;
    width: 40%;
    opacity: 1;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 7px 6px 12px 1px rgba(0,0,0,0.61);
    -webkit-box-shadow: 7px 6px 12px 1px rgba(0,0,0,0.61);
    -moz-box-shadow: 7px 6px 12px 1px rgba(0,0,0,0.61);
`

const Title = styled.h1`
    color: var(--lightColor1);
    width: 100%;
    text-align: center;
`

export const FormContainer = ({children, title}) => {
  return (
    <FormContains>
        <Title>{title}</Title>
        {children}
    </FormContains>
  )
}
