import { api } from "./configs/axiosConfig";

export const SportsApi={
    getAllSports : async function(userId){
        const response = await api.request({
            url:`getSports/${userId}`,
            method:"GET"
        })
        return response.data;
    },

    postSports : async function(postSportsTodo){
        const response= await api.request({
            url:'addSports',
            method:'POST',
            data:postSportsTodo
        })
        return response.data;
    },

    updateSports:async function(putSportsToDo,id){
        const response= await api.request({
            url:`updateSports/${id}`,
            method:'PATCH',
            data:putSportsToDo
        })
        return response.data;
    },

    deleteSports:async function(id){
        const response= await api.request({
            url:`deleteSports/${id}`,
            method:'DELETE',
        })
        return response.data;
    }
    
}