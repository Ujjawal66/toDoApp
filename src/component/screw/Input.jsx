import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
const C = styled.label`
  display: block;
  padding: 0.7rem;
  position: relative;
  i{
    position: absolute;
    right: 2.7rem;
    top: 50%; 
    font-size: 1.1rem;
    transform: translate(0, -50%);
    color: var(--color-grey-dark-opac);
    border-radius: 50%;
  }
  input {
    width: 100%;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-grey-dark);
    font-size: 1rem;
    padding: 0.7rem;
  }
`


const Input = ({placeholder, type = "text", onChange, value, require=false}) => {
  const [val, setVal] = useState(value);
  const handlerChange = (event) => {
    setVal(event.target.value);
  }
  useEffect(() => {
    onChange(val);
  }, [val])
  

  return (
    <C>
      <input type={type} value={val} placeholder={placeholder} onChange={handlerChange} required={require}/>
      {val && <i className="fa-solid fa-circle-xmark" 
      onClick={() => setVal("")}></i>}
    </C>
  )
}

export default Input