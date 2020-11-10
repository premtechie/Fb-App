import styled from 'styled-components';

export const Post = styled.div`
    max-width:100%;
    display:flex;
    flex-flow:column;
    padding:10px;
    justify-content:center;
    background-color:white;
    border-radius:20px;
    margin:10px 0;
`

export const ProfileDp = styled.div`
    display:flex;
    align-items:center;
    margin:10px;
    width:200px;
    height:60px;
`
export const DpImg = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    margin-right:10px;
`
export const ImageContainer = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex:1 2 auto;
    height:100%;
    margin:10px 0;
`
export const PostImg = styled.img`
    width:100%;
    margin:0 10px;
    border-radius:20px;

`
export const PostText = styled.div`
    margin:10px;
    display:flex;
`
export const H4 = styled.div`
    color:gray;
    text-align:start;
`
export const ProfileName = styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin:0 10px;
`
export const UserName = styled.div`
    font-size:14px;
    font-weight:bold;
`
export const Time = styled.div`
    font-size:11px;
    color:#ccc;
`
export const PostLikes = styled.div`
    display:flex;
    margin:10px;
    width:95%;
    border-radius:20px;
    background-color:whitesmoke;
`
export const LikeCount = styled.div`
    width:100%;
    border-radius:10px;
    text-align:start;
    padding-left:20px;
`

export const Like = styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:${props=>props.likeState ? "blue" : "black"};
    cursor:pointer;
    font-size:12px;
`
export const Comment = styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:black;
    font-size:12px;
    cursor:pointer;
`
export const Share = styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:black;
    font-size:12px;
    cursor:pointer;
`
export const CommentSection = styled.div`
    display:flex;
    align-items:center;
`
export const SendBtn = styled.button`
    color:white;
    width:100px;
    height:30px;
    margin:0 10px;
    border:none;
    border-radius:8px;
    background-color:blue;
    cursor:pointer;
    outline:none;
`
export const PostComment = styled.div`
    width:95%;
    padding:3px 20px;
    margin:8px auto;
    background-color:whitesmoke;
    border-radius:20px;
    text-align:start;

`
export const CommentDiv = styled.div`
    text-align:start;
    color:blue;
    margin-left:15px;
    font-weight:bold;
`
export const LikeIcon = styled.div`
    display:flex;
    align-items:center
    color:blue;
    font-size:13px;
`
