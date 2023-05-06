import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    addNum:0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        add: (state,action)=>{
            console.log(action)
            state.addNum=action.payload.a+ action.payload.b;

        }
    }
})

export const { increment, decrement, incrementByAmount,add } = counterSlice.actions;

export default counterSlice.reducer;