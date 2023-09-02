import { createSlice } from "@reduxjs/toolkit";


const counterslice= createSlice({
    name:"counter", ///reducername
    initialState:{
        value:0,
    },
    reducers:{
        increament:(state)=>{
            state.value+=1;  /// actions
        },
        decrement:(state)=>{
            state.value-=1;

        },

        // this increment decrement are actions
    }

})

export const{increament,decrement}=counterslice.actions //exporting actions
export const selectcount=(state)=>state.counter.value ///here the state means total redux function // counter.value means statevalues in the counter (reducer)
export default counterslice.reducer   //exporting reducer 


