import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice.js'
import chatSlice from './chatSlice.js'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        chat: chatSlice.reducer
    }
})

export default store