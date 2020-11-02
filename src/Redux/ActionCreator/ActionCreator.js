import {ADD_POST, COMMENT_POST, LIKE_POST} from '../Actions/Actions'


export const newPost=(data)=>{
    return{
        type:ADD_POST,
        payload:data
    }
}

export const likeCountIncrement=()=>{
    return {
        type:LIKE_POST
    }
}

export const commentDisplay=(data)=>{
    return {
        type:COMMENT_POST,
        payload:data
    }
}
