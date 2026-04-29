import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice"
import userReducer from "../features/users/userSlice"
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        users: userReducer
    }
})