import React, { useState, useEffect } from 'react'
import {types, logoUrl} from "../api";
import Select from './screw/Select';
import Input from './screw/Input';
import styled from 'styled-components';
import LogoSlider from './screw/LogoSlider';

const nowTime = () => {
  let date = new Date(); 
  let h=date.getHours(), m=date.getMinutes(), og="AM";
  if(h>12) {h-=12;og="PM"}
  else if(h==0) h=12;

  if(m<10) m='0'+m;
  return h+':'+m+' '+og;
}

const format24to12 = (value) => {
  if(!value) return null;
  let [hr, min] = value.split(":"), og="AM";
  if(hr>12) {hr-=12;og="PM"}
  else if(hr==0) hr=12;

  return hr+":"+min+" "+og
}

const NewForm = ({back, onAdd}) => {
  
  const [detail, setDetail] = useState({
    logo: 'ship/default.svg',
    type: {thing: 'Personal', color: 'darkgray'},
    title: "",
    place: "",
    time: ""
  });
  const handlerLogo = (value) => setDetail({...detail, logo:value});
  const handlerSubmit = (event) => {
    event.preventDefault();
    back();
    onAdd({...detail,
       place: (detail.place || "Anywhere"), 
       time: (format24to12(detail.time) || nowTime())
  });
  }
  

  return (
    <Container>
      <span onClick={back}><i className="fa-solid fa-arrow-left"></i></span>
      <div className="top">
        <h2>Add new things</h2>
      </div>
      <div className="logcho">
        <LogoSlider url={logoUrl} onChange={handlerLogo}/>
      </div>
      <Formi value={detail} setValue={setDetail} onSubmit={handlerSubmit}/>
    </Container>
  )
}

const Formi = ({setValue, value, onSubmit}) => {
  const handlerType = (val) => setValue({...value, type: val});
  const handlerTitle = (val) => setValue({...value, title: val});
  const handlerPlace = (val) => setValue({...value, place: val});
  const handlerTime = (val) => setValue({...value, time: val});

  return (
    <form onSubmit={onSubmit}>
      <Select list={types} onChange={handlerType} value={value.type}/>
      <Input placeholder="Title" onChange={handlerTitle} value={value.title} require/>
      <Input placeholder="Place" onChange={handlerPlace} value={value.place}/>
      <Input placeholder="Time" type='Time' onChange={handlerTime} value={value.time}/>
      <Button><button type='submit'>ADD YOUR THING</button></Button>
    </form>
  )
}

const Button = styled.div`
padding: 1.5rem 0.7rem;
button {
  width: 100%;
  height: 3rem;
  font-size: 0.9rem;
  font-weight: 550;
  border: none;outline: none;
  border-radius: 5px;
  background-color: var(--color-light);
  color: var(--white);
  box-shadow: 0 1rem 2rem 1rem var(--color-dark-dashadow);
  text-shadow: none;
  transition: 250ms;
  &:hover {
  box-shadow: none;
  text-shadow: 0 2px 1.7rem var(--black);
}}
`
const Container = styled.div`
  position: relative;
  background-color: var(--color-dark);
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  padding: 2rem;
  >span {
    position: absolute;
    top: 1.5rem; left: 2rem;
    display: flex; justify-content: center;align-items: center;
    font-size: 1.5rem;
    height: 3rem;
    width: 3rem;
    color: var(--color-light);
    border-radius: 30%;
    &:hover {
      background-color: var(--transparent-dark);
    }
  }
  .top {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    h2 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--white);
      margin: auto;
    }
  }
  .logcho {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

`

export default NewForm;