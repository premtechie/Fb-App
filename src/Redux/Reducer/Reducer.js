import * as actionTypes from '../Actions/Actions'

const initialState = {
    postData: [],
    comment: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return addPost(state, action)
        case actionTypes.LIKE_POST:
            return likeCounter(state, action)
        case actionTypes.COMMENT_POST:
            return commentSection(state, action)
        default:
            return state;
    }
}

const addPost = (state, action) => {
    const data = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    // newState.postData = [...state.postData];
    newState.postData.unshift(data)
    return newState;
}

const likeCounter = (state, action) => {
    let id = action.payload;
    let newState = JSON.parse(JSON.stringify(state));
    let postData = newState.postData;
    postData.forEach(post => {
        if (post.id === id) {
            post.like = !post.like;
            if(post.like){
                post.postLikeCount += 1;
            }else{
                post.postLikeCount -= 1;
            }
        }
    });
    return newState;
}

const commentSection = (state, action) => {
    const data = action.payload;
    const newState = JSON.parse(JSON.stringify(state));
    let postData=newState.postData;

    postData.forEach(post=>{
        if(post.id===data.id) {
            post.comments.unshift(data.comments)
        }
    })
    return newState;
}

export default reducer;