import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "../../apis/authApi";

export const signInUser = createAsyncThunk('signInUser',async (userCredential)=>{
    const response = await AuthApi.signIn(userCredential);
    console.log(response.data);
    return response.data;
})

const authSlice = createSlice({
    name: 'login',
    initialState:{
        isLoading:false,
        data:null,
        hasError:false
    },
    extraReducers: (builder)=>{
        builder.addCase(signInUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(signInUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.hasError=false;
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('userDetails', JSON.stringify(action.payload))
        });
        builder.addCase(signInUser.rejected,(state,action)=>{
            state.hasError=true;
            console.log('error',action);
        });

    }
})

export default authSlice.reducer;