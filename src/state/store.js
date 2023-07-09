import { configureStore} from "@reduxjs/toolkit";
import userAuthReducer from "./slice/userAuth";
import getHealthSlice from './slice/healthSlice'

export const store = configureStore({
    reducer:{
        auth:userAuthReducer,
        health:getHealthSlice
    },
});