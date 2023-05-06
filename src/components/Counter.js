import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/features/counterSlice'

export default function Counter() {
    const [customValue, setCustomValue] = React.useState('');
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div > 
 <h1 style={{'color':'green'}}><i>REDUX EXAMPLES</i></h1>
            <h2 style={{'color':'blue'}}> INCREMENT OR DECREMENT OR ADD A VALUE TO COUNTER VALUE</h2>
            <h2 style={{'color':'red'}}><b> Counter Value: {count}</b></h2>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decement
            </button>
            
            <h4>Add value to Counter Value: 
            <input type='number' onChange={(e)=> setCustomValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(parseInt(customValue)))}>Add</button></h4>
            <br/>

            <h2>OR</h2>
            <br/>
        </div>
    )
}