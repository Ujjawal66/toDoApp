import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import LogoDesignA from './LogoDesignA';

const LogoSlider = ({url, onChange}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [currenturl, setCurrenturl] = useState(null);
  const back =() => setIsDropdown(false);

  const handlerChange = (value) => {
    setCurrenturl(value);
    onChange(value);
    back();
  }

  return (
    <div style={{position: 'relative'}}>
      <div onClick={() => setIsDropdown(true)}><LogoDesignA url={currenturl}/></div>
      <Optio url={url} display= {isDropdown} back={back} onChange={handlerChange}/>
    </div>
  )
}


const Optio = ({url, display, back, onChange}) => {
  display = display ? "block": "none";
  return (
    <div style={{display: display}}>
      <Chad onClick={back}></Chad>
      <Chooser>
        {url.map((item, index)=> (
          <div onClick={() => onChange(item)} key={index}><LogoDesignA url={item}/></div>
        ))}
      </Chooser>
    </div>
  )
}

const Chooser = styled.div`
z-index: 10;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  top: 3.4rem;
  left: 1.7rem;
  gap: 0.5rem;
  transform: translate(-50%);
  width: 90vw;
  max-width: 17.1rem;
  min-width: 9.3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Chad = styled.div`
z-index: 9;
  background-color: var(--black);
  opacity: 0.4;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`
export default LogoSlider