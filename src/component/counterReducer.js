import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increament, selectcount } from './counter';


const CounterReducer = () => {
    const data=useSelector(selectcount)
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(increament())}>+</button>
        <span>{data}</span>
        <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default CounterReducer;