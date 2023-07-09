import { api } from "./configs/axiosConfig";

export const AuthApi={
    signIn : async function(userCredential){
        const response = await api.request({
            url:`auth/signIn`,
            method:"POST",
            data:userCredential
        })
        return response;
    },

    signUp : async function(userDetails){
        const response= await api.request({
            url:'auth/signUp',
            method:'POST',
            data:userDetails 
        })
        return response;
    },
}