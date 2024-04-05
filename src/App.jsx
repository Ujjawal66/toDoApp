import react, { useState, useEffect, useCallback, useRef} from 'react';
import { v4 } from "uuid";
import TopDetail from './component/TopDetail'
import Add from './component/screw/Add'
import { task } from './api'
import TaskList from './component/TaskList'
import NewForm from './component/NewForm'

const format12toMin = (time) => {
  let [t, og] = time.split(" ");
  let [hr, min]= t.split(":");
  hr = Number(hr), min=Number(min);
  let total = min;
  if(og.toLowerCase() == 'pm') total+=720;
  total+= hr*60;
  if(og.toLowerCase() == 'am' && hr==12) total=min;
  return total;
}

const sortTime = (list) => {
  let lll = list;
  lll.sort((a, b) => {
    let timeA = format12toMin(a.time); 
    let timeB = format12toMin(b.time); 
    return(timeA-timeB);
  })
  return lll;
}

function App() {
  const [rask, setRask] = useState(JSON.parse(localStorage.getItem('inTask'))||task);

  const personal = rask.reduce((t,c) => (c.type.thing=='Personal')? t+1:t, 0);
  const business = rask.reduce((t,c) => (c.type.thing=='Business')? t+1:t, 0);
  const percent = Math.round((rask.reduce((t,c) => (c.completed)? t+1:t, 0)/rask.length)*100);

  const [addingTask, setAddingTask] = useState(false);
  const back=()=>setAddingTask(false); 

  const nikla=(id) => {
    let r = rask;
    let rr = r.filter((item)=>{
      if(item.id===id) 
        return false
    return true
  });
  setRask(rr);
  }
  const done=(id) => {
    let r = rask;
    let rr = r.map((item)=>{
      if(item.id===id) 
      return {...item, completed: true}
    return item
  });
  setRask(rr);
  }
  const again=(id) => {
    let r = rask;
    let rr = r.map((item)=>{
      if(item.id===id) 
      return {...item, completed: false}
    return item
  });
  setRask(rr);
  }
  const clear = (event) => {
    event.stopPropagation();
    setRask(task);
  }
  const handlers={done, nikla, again, clear};
  
  const handlerAddThing = (value) => {
    let r = rask;
    r.push({...value, id: v4(), completed: false});
    setRask(sortTime(r));
  }
  useEffect(() => {
    localStorage.setItem('inTask', JSON.stringify(rask));

  });

  return (
    <><div id="ko">
      {
        addingTask? <NewForm back={back} onAdd={handlerAddThing}/>:
        <div>
        <Add bottom='8%' right='8%' onClick={setAddingTask}/>
        <TopDetail personal={personal} business={business} per_complete={percent}/>
        <TaskList list={rask} {...handlers}/>
        </div>
      }</div>
    </>
  )
}

export default App
