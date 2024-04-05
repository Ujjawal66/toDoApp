import React, {useState} from 'react';
import styled from 'styled-components';
import LogoDesignA from './screw/LogoDesignA'

const InboxLi = styled.li`
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 1rem 2px;
  border-bottom: 1px solid var(--color-grey-light);
  &:hover {
    background-color: var(--transparent-dark);
  }
  .timing {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  }
  .info {
    display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  p {
    font-size: 0.8rem;
  }}
  h3 {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
  }}
`
const Main = styled.main`
padding: 1.5rem;
span {
  color: var(--color-grey-dark);
}
&>span{
  display: flex;
  margin: 1rem 0 0 0;
  padding: 0.3rem 0;
  border-radius: 3px;
  font-weight: 600;
  justify-content: flex-start;align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  &:hover{
    background-color: var(--transparent-dark)
  }
}
&>span>em {
  display: inline-flex;
  justify-content: center;align-items: center;
  height: 1rem; width: 1rem;border-radius: 50%;
  font-size: 0.7rem;
  background-color: var(--color-grey-dark);
  color: var(--white);
}
&>span>em.def {
  border-radius: 0.5rem;
  width: 5rem; 
  margin-left: auto;
  &:hover {
    background-color: var(--color-dark);
  }
}
ul{
  height: 0;
}
`

const TaskList = ({list, done, nikla, again, clear}) => {
  const com=list.reduce((t,index)=>{
    return index.completed ? t+1:t;
  },0);
  const [d1, setD1] = useState(false);
  const [d2, setD2] = useState(true);
  return (
    <Main>
      <span onClick={() => setD1(!d1)}>INBOX {d1?<i className="fa-solid fa-chevron-down"></i>:<i className="fa-solid fa-chevron-up"></i>} <em className="def" onClick={clear}>DEFAULT</em></span>
      <List list={list} complete={false} done={done} nikla={nikla} down={d1}/>
      <span onClick={() => setD2(!d2)}>COMPLETED <em>{com}</em>
        {d2?<i className="fa-solid fa-chevron-down"></i>:<i className="fa-solid fa-chevron-up"></i>}
      </span>
      <List list={list} complete={true} again={again} nikla={nikla} down={d2}/>
    </Main>
  )
}

const List = ({list, down,complete, ...handlers}) => {
  const styl = {
    height: (down? 0: 'auto'),
    overflow: (!down? 'visible': 'hidden'),
  }
  return (<ul style={styl}>
    {list.map((item) => {
      if(complete)
        return item.completed?<Item item={item} {...handlers} key={item.id} complete/>: null;
      else
        return item.completed?null:<Item item={item} {...handlers} key={item.id}/>;
    })}
  </ul>)
}

const Item = ({item,complete, done, nikla, again}) => {
  const [open, setOpen] = useState(false);
  const toogleOpen = () => setOpen(!open);
  let style = {height: (open? '2.7rem': 0)};
  const id = item.id;
  return (
  <InboxLi onClick={toogleOpen} style={{backgroundColor: (open? 'var(--transparent-dark)': null)}}>
    <LogoDesignA url={item.logo}/>
    <div className="info">
      <h3>{item.title}</h3>
      <p><span>{item.place}</span></p>
    </div>
    <div className='timing'>
      <span>{item.time}</span>
      <span style={{color: item.type.color, fontSize: '1rem'}}>
        {item.type.thing}
      </span>
    </div>
    {
      complete? <TwoButton style={style}>
      <button onClick={()=> again(id)}style={{backgroundColor: 'var(--color-light)'}}><i className="fa-solid fa-repeat"></i>Again</button>
      <button onClick={()=> nikla(id)} style={{backgroundColor: 'var(--color-dark)'}}><i className="fa-solid fa-eraser"></i>Delete</button>
    </TwoButton>
      :<TwoButton style={style}>
      <button onClick={()=> done(id)}style={{backgroundColor: 'var(--color-light)'}}><i className="fa-solid fa-check"></i>Complete</button>
      <button onClick={()=> nikla(id)} style={{backgroundColor: 'var(--color-dark)'}}><i className="fa-solid fa-eraser"></i>Delete</button>
      </TwoButton>
    }
    
  </InboxLi>
)
}

const TwoButton= styled.div`
transition: 150ms;
position: absolute;
height: 0;
top: 100%;
left:0;
width: 100%;
display: flex;
z-index: 10;
border-radius: 0 0 0.5rem 0.5rem;
box-shadow: 0 2px 5px 0 #00000080;
overflow: hidden;
button {
  cursor: pointer;
  border: 0;
  outline: 0;
  flex: 1 1 50%;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: black;
  color: #fff;
  text-shadow: -1px 1px 2px #00000080;
  &:hover{
    text-shadow: none;
  }
}
`
export default TaskList;