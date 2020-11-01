import * as actionTypes from '../Actions/Actions'

const initialState={
    postData:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_POST:
            return addPost(state,action)
        default:
            return state;
    }
}

const addPost=(state,action)=>{
    const data=action.payload;
    const newState = {...state}
    newState.postData.push({text:data,imgURL:''}) 
    console.log('Reducer:',newState)
    return newState;
}



export default reducer;