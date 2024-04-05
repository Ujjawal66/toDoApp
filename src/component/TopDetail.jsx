import React from 'react';
import styled from 'styled-components';
import Progress from './screw/Progress';

const Showoff = styled.div`
overflow: auto;
height: 30vh;
width: 100%;
min-height: 13rem;
max-height: 17rem;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
color: var(--white);
.bgimg {
  position: absolute;
  height: 100%;
  width: 100%;
  background: no-repeat bottom/cover url('blue-mountain.jpg') var(--color-dark);
  z-index: -10;
}

.bgimg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #800080;
  opacity: 0.2;
}
.right {
  flex: 1.5 1.5 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.7rem;
  position: relative;
  h1 {
    width: 60%;
    flex: 1 1 auto;
    display: flex; justify-content: flex-start;align-items: center;
    &::after {
      content: "";
      background: linear-gradient(to right,var(--gradian-color1), var(--gradian-color2) 20%, var(--color-light) 60%);
      position: absolute;
      bottom: 0; left: 0;
      height: 4px;
      width: 100%;
    }
  }
}
.left {
  display: flex;
  flex-direction: column;
  padding: 1.7rem;
  flex: 1 1 40%;
  height: 100%;
  background-image: radial-gradient(transparent 40%, #00000030);
  >div {
    flex: 1 1 auto;
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  
  }
  
  p {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.7rem;
  }
  
  >span { display: flex; 
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
  }
}
`

const TopDetail = ({personal=0, business=0, per_complete=0}) => {
  let m = 'Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec'.split(" ");
  let d = new Date();
  let month = m[d.getMonth()];
  let date = new Date().getDate(), year = new Date().getFullYear();

  return (
    <Showoff>
      <div className="bgimg"></div>
      <div className="right">
        <h1>Your Things</h1>
        <span>{month} {date}, {year}</span>
      </div>
      <div className="left">
        <div>
          <p>{personal}<span>Personal</span></p>
          <p>{business}<span>Business</span></p>
        </div>
        <span><Progress percent={per_complete}/>{per_complete} done</span>
      </div>
    </Showoff>
  )
}

export default TopDetail;