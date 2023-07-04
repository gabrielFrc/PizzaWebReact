import { configureStore } from '@reduxjs/toolkit'
import controlEventsReducer from './events-control/eventsControlSlice'

export default configureStore({
    reducer: {
        controlEvents: controlEventsReducer,
    }
})