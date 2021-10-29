import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Store/reduxSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})