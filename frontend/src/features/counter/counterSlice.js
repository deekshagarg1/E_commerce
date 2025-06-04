import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice ({
name:"counter",
initialState:{value:0},
reducers:{
    increment: state=>{
        state.value +=1;
    },

    decrement : state=>{
        state.value -=1;
    },

    increaseByAmount : state =>{
        state.value +=5;
    }

}
})
export const{increment , decrement , increaseByAmount} = counterSlice.actions;
export default counterSlice.reducer;