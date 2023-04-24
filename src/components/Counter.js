import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/features/counterSlice'

export default function Counter() {
    const [customValue, setCustomValue] = React.useState('');
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decement
            </button>
            <h2>OR</h2>
            <h4>Add value</h4>
            <input type='number' onChange={(e)=> setCustomValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(parseInt(customValue)))}>Add</button>
        </div>
    )
}