import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const S = styled.label`
display: block;
position: relative;
padding: 0.7rem;
select {
width: 100%;
color: var(--white);
background-color: transparent;
border: none;
outline: none;
border-bottom: 1px solid var(--color-grey-dark);
font-size: 1rem;
padding: 0.7rem;
option {
  font-size: 1rem;
  color: #000;
}}
.dot {
  content: "";
  position: absolute;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  transform: translate(0, -50%);
  top: 50%;
  left: 0.7rem;
}
`

const Select = ({list, onChange, value}) => {
  const [val, setVal] = useState(value);
  const changingHandler = (event) => {
    setVal(JSON.parse(event.target.value));
    console.log(val);
  }
  
  useEffect(() => {
    onChange(val)
  }, [val]);
  
  return (
    <S>
      <div className="dot" style={{backgroundColor: val.color,}}></div>
      <select onChange={changingHandler} value={JSON.stringify(val)}>
      {list.map((item, index) => (
        <option value={JSON.stringify(item)} key={index}>
          {item.thing}
        </option>
      ))}
      </select>
    </S>
  )
}

export default Select