import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'productsCart',
    initialState: {
        productsOnCart: []
    },
    reducers: {
        AddProduct(state, {payload}){
            var oldDate = new Date().toDateString();
            let myNewState = {};

            let repeatedProduct = false;
            if(state.productsOnCart.length > 0){
                state.productsOnCart.forEach(element => {
                    if(payload.title === element.title){
                        if('quantity' in element){
                            element.quantity ++;
                            element.date = oldDate;

                            repeatedProduct = true;
                            return;
                        }
                    }
                });
                if(!repeatedProduct){
                    myNewState = {...state, productsOnCart: [...state.productsOnCart, {...payload, quantity: 1, date: oldDate}]}
                    return myNewState;
                }
            }else{
                myNewState = {...state, productsOnCart: [...state.productsOnCart, {...payload, quantity: 1, date: oldDate}]}
                return myNewState;
            }
        },
        ResetProducts(state, {payload}){
            return{...state, productsOnCart: payload}
            // return{...state, productsOnCart: [payload]}
        },
        RemoveProduct(state, {payload}){
            state.productsOnCart.forEach(element => {
                if(payload.title === element.title){
                    element.quantity --;
                    
                    if(element.quantity <= 0){
                        state.productsOnCart.forEach((v)=>{
                            if(v.quantity <= 0){
                                state.productsOnCart.splice(state.productsOnCart.indexOf(v), 1)
                            }
                        })
                    }
                }
            });
        }
    }
});

export const { AddProduct, RemoveProduct, ResetProducts } = slice.actions;

export default slice.reducer;