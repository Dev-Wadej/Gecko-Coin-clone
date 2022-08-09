import styled from '@emotion/styled';
import React from 'react';

const Button = ({ buttonName }) => {
  return <ButtonContainer>{buttonName}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  border-radius: 0.5rem;
  color: ${(props) => props.inputColor || '#8FC649'};
  border: 1px solid;
  padding: 0.5rem 1rem;
`;
