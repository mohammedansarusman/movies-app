import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user slice",
    initialState:{
        userName:""
    },
    reducers:{
        updateName:(state,action)=>{
            state.userName=action.payload
        },
    }
})
console.log("userSlice executed");
export default userSlice.reducer;
export const {updateName}  = userSlice.actions;
