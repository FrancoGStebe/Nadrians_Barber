import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   userData: {
    id: null,
    name: null
   },
   userAppoiments: []
}

export const loginSlice = createSlice({
    name: "actualUser",
    initialState,
    reducers: {
        iniciarSeccion: (state, action) => {
         state.userData = action.payload;
        },
        turnosUser: (state, action) =>{
            state.userAppoiments = action.payload;
        }
    }
})

export const {iniciarSeccion, turnosUser} = loginSlice.actions;
export default loginSlice.reducer;