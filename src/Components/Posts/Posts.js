import React, { useState } from 'react'
import styled from 'styled-components';
import { AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import TextArea from 'antd/lib/input/TextArea'
import {useSelector,useDispatch} from 'react-redux'
import { commentDisplay, likeCountIncrement } from '../../Redux/ActionCreator/ActionCreator';

let count=false;

const Post =styled.div`
    width:100%;
    display:flex;
    flex-flow:column;
    padding:10px;
    justify-content:center;
    background-color:white;
    border-radius:20px;
`

const ProfileDp=styled.div`
    display:flex;
    align-items:center;
    margin:10px;
    width:200px;
    height:60px;
`
const DpImg=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    margin-right:10px;
`
const ImageContainer=styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    flex:1 2 auto;
    height:100%;
    margin:10px 0;
`
const PostImg=styled.img`
    width:100%;
    margin:0 10px;
    border-radius:20px;

`
const PostText=styled.div`
    margin:10px;
    display:flex;
`
const H4=styled.div`
    color:gray;
    text-align:start;
`
const ProfileName=styled.div`
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    margin:0 10px;
`
const UserName=styled.div`
    font-size:14px;
    font-weight:bold;
`
const Time=styled.div`
    font-size:11px;
    color:#ccc;
`
const PostLikes=styled.div`
    display:flex;
    margin:10px;
    width:95%;
    border-radius:20px;
    background-color:whitesmoke;
`
const LikeCount=styled.div`
    width:100%;
    border-radius:10px;
    text-align:start;
    padding-left:20px;
`

const Like=styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:${count ? "blue":"black"};
    cursor:pointer;
    font-size:12px;
`
const Comment=styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:black;
    font-size:12px;
    cursor:pointer;
`
const Share=styled.div`
    display:flex;
    align-items:center;
    width:33%;
    justify-content:center;
    padding:5px 0;
    color:black;
    font-size:12px;
    cursor:pointer;
`
const CommentSection=styled.div`
    display:flex;
    align-items:center;
`
const SendBtn=styled.button`
    color:white;
    width:100px;
    height:30px;
    margin:0 10px;
    border:none;
    border-radius:8px;
    background-color:blue;
    cursor:pointer;
`
const PostComment=styled.div`
    width:95%;
    padding:3px 20px;
    margin:8px auto;
    background-color:whitesmoke;
    border-radius:20px;
    text-align:start;

`
const CommentDiv=styled.div`
    text-align:start;
    color:blue;
    margin-left:15px;
    font-weight:bold;
`
const LikeIcon=styled.div`
    display:flex;
    align-items:center
    color:blue;
    font-size:13px;
`


function Posts() {

    const [comment,viewComment]=useState(false);
        
    const dispatch = useDispatch()
    
    const counter=useSelector(state=>state.like);


    //----------------like handler section--------------------
    const likehandler=()=>{
        if(!counter){
            dispatch(likeCountIncrement())
        }
        count=true;
    }

    //------------comment handler section-------------

    const [commentText,sendComment]=useState('')
    const commentHandler=()=>{
        console.log('value :',commentText);
        dispatch(commentDisplay(commentText));
        viewComment(false)
        sendComment('')
    }

    const commentArray=useSelector(state=>state.comment)

    console.log("comments:",commentArray);
    console.log('post likes:',counter);



    return (
        <Post>
            <ProfileDp>
                <DpImg src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='' />
                <ProfileName>
                    <UserName>You</UserName>
                    <Time>12 hours ago</Time>
                </ProfileName>         
            </ProfileDp>
            <PostText>
                <H4>so most of the functions of this module have already been marked as deprecated. Installation.so most of the functions of this module have already been marked as deprecated. Installation</H4>
            </PostText>
            <ImageContainer>
                <PostImg src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt=''/>
            </ImageContainer>
            <LikeCount>
                {counter?
                    <LikeIcon>
                        <AiFillLike style={{color:'blue',marginTop:'3px'}} />
                        <div>{counter}</div>
                    </LikeIcon>
                :null}
            </LikeCount>
            <PostLikes>
                <Like onClick={likehandler} >
                    <AiFillLike />
                    <div>Like</div>
                </Like>
                <Comment onClick={()=>viewComment(true)}>
                    <BiComment />
                    <div>Comment</div>
                </Comment>
                <Share>
                    <RiShareForwardLine />
                    <div>Share</div>
                </Share>
            </PostLikes>
            <CommentDiv>Comments:</CommentDiv>
            {comment ?
                <CommentSection>
                    <TextArea value={commentText} onChange={(e)=>sendComment(e.target.value)} rows={3} style={{borderRadius:'20px', margin:'20px 0'}} placeholder='What"s on your Mind ? ' />
                    <SendBtn onClick={commentHandler}>Send</SendBtn>
                </CommentSection>:null
            }

            {
                commentArray.map(comment=><PostComment>{comment}</PostComment>)
            }
        </Post>
    )
}

export default Posts
