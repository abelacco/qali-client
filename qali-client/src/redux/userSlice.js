import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
}

const userSlice = createSlice ({
    name:"user", // el store tiene un action que se llama user
    initialState,
    reducers: {
        /* acciones */
    } 
})

export const {/* acciones */} = userSlice.actions

export default userSlice.reducer; 