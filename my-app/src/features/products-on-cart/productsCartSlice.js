import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'productsCart',
    initialState: {
        productsOnCart: []
    },
    reducers: {
        AddProduct(state, {payload}){
            return{...state, productsOnCart: [...state.productsOnCart, payload]}
        },
        RemoveProduct(state, {payload}){
            let productNotFound = true;
            
            const newSt = state.productsOnCart.filter((v) => {
                if(v.title === payload.title && productNotFound){
                    productNotFound = false;
                    return false;
                }
                return true;
            })
            return{...state, productsOnCart: [...newSt]}
        }
    }
});

export const { AddProduct, RemoveProduct } = slice.actions;

export default slice.reducer;