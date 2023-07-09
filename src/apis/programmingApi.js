import { api } from "./configs/axiosConfig";

export const ProgrammingApi={
    getAllProgramming : async function(userId){
        const response = await api.request({
            url:`getProgramming/${userId}`,
            method:"GET"
        })
        return response.data;
    },

    postProgramming : async function(postProgrammingTodo){
        const response= await api.request({
            url:'addProgramming',
            method:'POST',
            data:postProgrammingTodo
        })
        return response.data;
    },

    updateProgramming:async function(putProgrammingToDo,id){
        const response= await api.request({
            url:`updateProgramming/${id}`,
            method:'PATCH',
            data:putProgrammingToDo
        })
        return response.data;
    },

    deleteProgramming:async function(id){
        const response= await api.request({
            url:`deleteProgramming/${id}`,
            method:'DELETE',
        })
        return response.data;
    }
    
}