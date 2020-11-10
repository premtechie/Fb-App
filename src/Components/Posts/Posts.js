import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import TextArea from 'antd/lib/input/TextArea'
import { useSelector, useDispatch } from 'react-redux'
import { commentDisplay, likeCountIncrement } from '../../Redux/ActionCreator/ActionCreator';
import {Post,PostComment,PostImg,PostLikes,PostText,ProfileDp,ProfileName,DpImg,ImageContainer,H4,UserName,Time,Like,LikeCount,LikeIcon,Comment,CommentDiv,CommentSection,SendBtn,Share} from '../../Styles/Posts'



function Posts(props) {

    const [comment, viewComment] = useState(false);

    const dispatch = useDispatch()

    const textValue = props.data.textValue;

    const postId = props.data.id;

    const getPost = (state) => {
        let postData = state.postData;
        for (let i = 0; i < postData.length; i++) {
            if (postData[i].id === postId) {
                return postData[i];
            }
        }
        return null;
    }

    const counter = useSelector(state => {
        const post = getPost(state);
        return post ? post.postLikeCount : 0;
    });

    const likeState = useSelector(state => {
        const post = getPost(state);
        return post.like;
    });

    //----------------like handler section--------------------
    const likehandler = () => {
        dispatch(likeCountIncrement(postId))
    }

    //------------comment handler section-------------

    const [commentText, sendComment] = useState('')
    const commentHandler = () => {
        const postComment={
            id:postId,
            comments:commentText
        }
        if (commentText) {
            dispatch(commentDisplay(postComment));
            // dispatch({type:COMMENT_POST,payload:postComment })
            viewComment(false)
            sendComment('')
        }

    }
    
    //----------commnets array from reducer-----------------------

    const commentsOfPost=useSelector(state=>{
        const comment = getPost(state);
        return comment.comments
    })



    console.log('comments in Posts : ', commentsOfPost)

    //---------------current time----------
    let time = new Date().toLocaleString();


    return (
        <Post>
            <ProfileDp>
                <DpImg src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='' />
                <ProfileName>
                    <UserName>You</UserName>
                    <Time>{time}</Time>
                </ProfileName>
            </ProfileDp>
            <PostText>
                <H4>{textValue}</H4>
            </PostText>
            <ImageContainer>
                {/* <PostImg src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt=''/> */}
            </ImageContainer>
            <LikeCount>
                {counter ?
                    <LikeIcon>
                        <AiFillLike style={{ color: 'blue', marginTop: '3px' }} />
                        <div>{counter}</div>
                    </LikeIcon>
                    : null}
            </LikeCount>
            <PostLikes>
                <Like likeState = {likeState} onClick={likehandler} >
                    <AiFillLike />
                    <div>Like</div>
                </Like>
                <Comment onClick={() => viewComment(true)}>
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
                    <TextArea value={commentText} onChange={(e) => sendComment(e.target.value)} rows={3} style={{ borderRadius: '20px', margin: '20px 0' }} placeholder='What"s on your Mind ? ' />
                    <SendBtn onClick={commentHandler}>Send</SendBtn>
                </CommentSection> : null
            }

            {
                commentsOfPost.map((comment, index) => <PostComment key={index} >{comment}</PostComment>)
            }
        </Post>
    )
}

export default Posts
