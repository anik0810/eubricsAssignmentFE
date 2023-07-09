import { api } from "./configs/axiosConfig";

export const StudyApi={
    getAllStudy : async function(userId){
        const response = await api.request({
            url:`getStudy/${userId}`,
            method:"GET"
        })
        return response.data;
    },

    postStudy : async function(postStudyTodo){
        const response= await api.request({
            url:'addStudy',
            method:'POST',
            data:postStudyTodo
        })
        return response.data;
    },

    updateStudy:async function(putStudyToDo,id){
        const response= await api.request({
            url:`updateStudy/${id}`,
            method:'PATCH',
            data:putStudyToDo
        })
        return response.data;
    },

    deleteStudy:async function(id){
        const response= await api.request({
            url:`deleteStudy/${id}`,
            method:'DELETE',
        })
        return response.data;
    }
    
}