import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { feedbackApi } from './api/feedback/feedBackApi'

export const store = configureStore({
    reducer: {
        [feedbackApi.reducerPath]: feedbackApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(feedbackApi.middleware),
    
    devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)