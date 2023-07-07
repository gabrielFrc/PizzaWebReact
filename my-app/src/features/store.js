import { configureStore } from '@reduxjs/toolkit'
import controlEventsReducer from './events-control/eventsControlSlice'
import productsCartReducer from './products-on-cart/productsCartSlice'

export default configureStore({
    reducer: {
        controlEvents: controlEventsReducer,
        productsOnCart: productsCartReducer,
    }
})