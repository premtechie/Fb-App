import {ADD_POST, COMMENT_POST, LIKE_POST} from '../Actions/Actions'


export const newPost=(data)=>{
    return{
        type:ADD_POST,
        payload:data
    }
}

export const likeCountIncrement=(id)=>{
    return {
        type:LIKE_POST,
        payload:id
    }
}

export const commentDisplay=(data)=>{
    return {
        type:COMMENT_POST,
        payload:data
    }
}
