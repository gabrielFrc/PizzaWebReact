import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'productsCart',
    initialState: {
        productsOnCart: []
    },
    reducers: {
        AddProduct(state, {payload}){
            var oldDate = new Date();
            var newDate = oldDate.toDateString();

            if(localStorage.getItem("myproducts") != null)
                localStorage.setItem("myproducts", JSON.stringify([
                    ...JSON.parse(localStorage.getItem("myproducts")), {...payload, date: newDate}
                ]));
            else{
                localStorage.setItem("myproducts", JSON.stringify([
                    {...payload, date: newDate, quantity: 1}
                ]));
            }
            return{...state, productsOnCart: [...state.productsOnCart, payload]}
        },
        ResetProducts(state, {payload}){
            return{...state, productsOnCart: [payload]}
        },
        RemoveProduct(state, {payload}){
            let productNotFound = true;

            const newLocal = JSON.parse(localStorage.getItem("myproducts")).filter((v) => {
                if(v.title === payload.title && productNotFound){
                    productNotFound = false;
                    return false;
                }
                return true;
            });

            localStorage.setItem("myproducts", JSON.stringify(
                newLocal
            ));

            return{...state, productsOnCart: [...newLocal]}
        }
    }
});

export const { AddProduct, RemoveProduct, ResetProducts } = slice.actions;

export default slice.reducer;