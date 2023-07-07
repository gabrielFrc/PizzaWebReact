import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'productsCart',
    initialState: {
        productsOnCart: []
    },
    reducers: {
        AddProduct(state, {payload}){
            return{...state, productsOnCart: [...state.productsOnCart, payload]}
        }
    }
});

export const { AddProduct } = slice.actions;

export default slice.reducer;