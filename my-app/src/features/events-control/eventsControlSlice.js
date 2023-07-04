import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'eventsControl',
    initialState: {
        isLogged: false,
        isOnMobile: false,
    },
    reducers: {
        LogIn(state){
            return{...state, isLogged: true}
        },
        LogOut(state){
            return{...state, isLogged: false}
        },
        SetMobile(state, { payload }){
            return{...state, isOnMobile : payload}
        }
    }
})

export const { LogIn, LogOut, SetMobile } = slice.actions;

// export const onMobile = state => state.isOnMobile;

export default slice.reducer;