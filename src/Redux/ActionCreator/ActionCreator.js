import {ADD_POST} from '../Actions/Actions'


const newPost=(data)=>{
    return{
        type:ADD_POST,
        payload:data
    }
}

export default newPost;