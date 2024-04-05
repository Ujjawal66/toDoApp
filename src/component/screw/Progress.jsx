import React from 'react'
import styled from 'styled-components';

const Container = styled.span`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    background-color: #000;
  }
`

const Progress = ({percent}) => {
  const style = {
    background: `conic-gradient(var(--color-light) ${percent}%, var(--color-light-transparent) ${percent}%`,
  }
  return (
    <Container style={style}/>
  )
}

export default Progress; 