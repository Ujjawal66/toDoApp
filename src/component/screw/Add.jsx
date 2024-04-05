import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 3.5rem;
  height: 3.5rem;
  background-color: var(--color-light);
  border-radius: 50%;
  // bottom: 8%; right: 8%;
  box-shadow: 0 10px 16px 5px var(--color-light-transparent);
  border: 0;
  &::before {
    content: "";
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    height: 40%;
    width: 3px;
    background-color: var(--white);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    height: 40%;
    width: 3px;
    background-color: var(--white);
  }
  &:hover {
    box-shadow: none;
  }
`

const Add = ({onClick, ...pos}) => {
  const position = {
    top: 'auto', bottom: 'auto', right: 'auto', left: 'auto',
    ...pos
  }
  return (
    <Container onClick={() => onClick(true)} style={position}></Container>
  )
}

export default Add