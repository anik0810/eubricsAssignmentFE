import { api } from "./configs/axiosConfig";

export const HealthApi={
    getAllHealth : async function(userId){
        const response = await api.request({
            url:`health/getHealth/${userId}`,
            method:"GET"
        })
        return response.data;
    },

    postHealth : async function(postHealthTodo){
        const response= await api.request({
            url:'health/addHealth',
            method:'POST',
            data:postHealthTodo
        })
        return response.data;
    },

    updateHealth:async function(putHealthToDo,id){
        console.log(id);
        const response= await api.request({
            url:`health/updateHealth/${id}`,
            method:'PATCH',
            data:putHealthToDo
        })
        return response.data;
    },

    deleteHealth:async function(id,userId){
        const response= await api.request({
            url:`health/deleteHealth/${id}/${userId}`,
            method:'DELETE',
        })
        return response.data;
    }

    
}