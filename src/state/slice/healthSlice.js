import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { HealthApi } from "../../apis/healthApi";

export const addHealthData = createAsyncThunk('addHealthData',async (healthDetails)=>{
    const response = await HealthApi.postHealth(healthDetails);
    console.log(response);
    return response;
})
export const getHealthData = createAsyncThunk('getHealthData',async (userId)=>{
    const response = await HealthApi.getAllHealth(userId);
    console.log(response);
    return response;
})
export const updateHealthData = createAsyncThunk('updateHealthData',async (healthDetails)=>{

    const response = await HealthApi.updateHealth(healthDetails.payload,healthDetails.id);
    console.log(response);
    return response;
})
export const deleteHealthData = createAsyncThunk('deleteHealthData',async (deleteData)=>{

    const response = await HealthApi.deleteHealth(deleteData.id,deleteData.userId);
    console.log(response);
    return response;
})

const healthSlice = createSlice({
    name: 'getHealth',
    initialState:{
        isLoading:false,
        data:null,
        hasError:false
    },
    extraReducers: (builder)=>{
        builder.addCase(getHealthData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(getHealthData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.hasError=false;
        });
        builder.addCase(getHealthData.rejected,(state,action)=>{
            state.hasError=true;
            console.log('error',action);
        });
        builder.addCase(addHealthData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(addHealthData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data.push(action.payload);
            state.hasError=false;
        });
        builder.addCase(addHealthData.rejected,(state,action)=>{
            state.hasError=true;
            console.log('error',action);
        });
        builder.addCase(updateHealthData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(updateHealthData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.hasError=false;
        });
        builder.addCase(updateHealthData.rejected,(state,action)=>{
            state.hasError=true;
            console.log('error',action);
        });
        builder.addCase(deleteHealthData.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(deleteHealthData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            state.hasError=false;
        });
        builder.addCase(deleteHealthData.rejected,(state,action)=>{
            state.hasError=true;
            console.log('error',action);
        });

    },
})

export default healthSlice.reducer;