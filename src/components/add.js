import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../store/features/counterSlice'

export default function Add() {
    const [result, setResult] = React.useState(0);
    const dispatch=useDispatch();
    const addNum= useSelector((state) => state.counter.addNum)

    const [firstNum,setFirstNum]=React.useState(0);
    const [secondNum,setSecondNum]=React.useState(0);

    
   

    return (
        <div>
        <h2 style={{'color':'blue'}}>ADD TWO NUMBERS</h2>

        <h3>First Number:<input type='number' onChange={(e)=>setFirstNum(e.target.value)} /></h3>
        <h3>Second Number:<input type='number' onChange={(e)=>setSecondNum(e.target.value)} /></h3>
        
        <button onClick={()=>dispatch(add({a:parseInt(firstNum),b:parseInt(secondNum)}))}> Add Numbers</button>
        <h2 style={{'color':'red'}}> Addition Result: {addNum}</h2>
        </div>
    )
    }