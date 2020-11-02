import TextArea from 'antd/lib/input/TextArea'
import React,{useRef,useState} from 'react'
import { CgNotes} from "react-icons/cg";
import { RiGalleryFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {newPost} from '../../Redux/ActionCreator/ActionCreator';

const PostWrapper=styled.div`
    border-radius:20px;
    width:100%;
    margin:10px 0;
    margin-top:30px;
    background-color:white;
    padding:15px;
    -moz-box-shadow: 0 0 4px 2px #ccc;
    -webkit-box-shadow: 0 0 4px 2px #ccc;
    box-shadow: 0 0 4px 2px #ccc;
`

const CreateButton=styled.div`
    width:35px;
    padding:5px 10px;
    height:35px;
    display:flex;
    font-size:16px;
    align-items:center;
    border-radius:50%;
    background-color:#e6fffa;
    color:blue;
`
const PostIcon=styled.div`
    display:flex;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
`
const H4=styled.h4`
    margin:0 10px;
`
const Attchments=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

`
const AttachmentIcons=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    background-color:#e0ebeb;
    border-radius:30px;
    font-size:12px;

`
const TagAttachment=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    font-size:12px;
    background-color:pink;
    border-radius:30px;

`
const HappyAttachment=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    font-size:12px;
    background-color:lightyellow;
    border-radius:30px;

`
const IconBg=styled.div`
    background-color:blue;
    color:white;
    padding:5px;
    border-radius:20px;
    height:25px;
    width:25px;
`
const TagIconBg=styled.div`
    background-color:red;
    color:white;
    padding:3px;
    border-radius:20px;
    height:25px;
    width:25px;
`
const EmojiIconBg=styled.div`
    background-color:orange;
    color:white;
    padding:3px;
    border-radius:20px;
    height:25px;
    width:25px;
`
const OptionButton=styled.div`
    background:#e0ebeb;
    width:35px;
    height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    font-weight:bolder;
`


const IconTagName=styled.div`
    margin:0 5px;
    cursor:pointer;
`
const ChooseFile=styled.input`
    margin:0 10px;
    display:none;
`





function CreatePost(props) {
    const fileRef = useRef();
    const [textData, setTextData]=useState('');
    const [image,setImage] = useState('');
    const dispatch = useDispatch()
    const textDataHandler=(data)=>{
        setTextData(data)
    }

    const postHandler=()=>{
        
        // setImage(URL.createObjectURL(fileRef.current.files[0]))
        const postInputs={
            textValue:textData        
        }
        dispatch(newPost(postInputs));
        console.log('values from button : ',postInputs)
        setTextData('')
        alert('Posted Successfully....!')
    }
    const fileClickHandler=()=>{
        fileRef.current.click();
    }


    const postValue=useSelector(state=>state.postData)
    const value=postValue[0];
    console.log('imageAdd:',value)
    return (
        <PostWrapper>
            <PostIcon onClick={postHandler}>
                <CreateButton><CgNotes /></CreateButton>
                <H4>Create Post</H4>
            </PostIcon>
            <TextArea value={textData} onChange={(e)=>textDataHandler(e.target.value)} rows={3} style={{borderRadius:'20px', margin:'20px 0'}} placeholder='What"s on your Mind ? ' />
            <Attchments>
                <AttachmentIcons>
                    <IconBg >
                        <RiGalleryFill />
                    </IconBg>
                    <IconTagName onClick = {fileClickHandler }>Gallery</IconTagName>
                    <input type = 'file' style = {{display:"none"}} ref = {fileRef}/>
                </AttachmentIcons>
                <TagAttachment>
                    <TagIconBg>
                        <FaUserFriends />
                    </TagIconBg>    
                    <IconTagName>Tag Friends</IconTagName>
                </TagAttachment>
                <HappyAttachment>
                    <EmojiIconBg>
                        <ImHappy2 />
                    </EmojiIconBg>
                    <IconTagName>Feeling/Activity</IconTagName>
                </HappyAttachment>
                <OptionButton>:</OptionButton>
            </Attchments>
        </PostWrapper>
    )
}

export default CreatePost
