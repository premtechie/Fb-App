import * as actionTypes from '../Actions/Actions'

const initialState={
    postData:[],
    like:0,
    comment:[]
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_POST:
            return addPost(state,action)
        case actionTypes.LIKE_POST:
            return likeCounter(state,action)
        case actionTypes.COMMENT_POST:
            return commentSection(state,action)
        default:
            return state;
    }
}

const addPost=(state,action)=>{
    const data=action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    // newState.postData = [...state.postData];
    newState.postData.unshift(data) 
    console.log('Reducer:',newState)
    return newState;
}

const likeCounter=(state,action)=>{
    let id=action.payload;
    const newState={...state}
    const newArray={...state.postData}
    const elementIndex=state.postData.findIndex(element=>element.id===id);
    newArray[elementIndex]={...newArray[elementIndex],like:newArray[elementIndex].like++};
    console.log('element : ', newArray[elementIndex])
    
    newState.like+=1;
    return newState
}

const commentSection=(state,action)=>{
    const data=action.payload;
    const newState={...state};

    newState.comment.push(data)
    console.log(newState);
    return newState;
}

export default reducer;