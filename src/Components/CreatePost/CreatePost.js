import TextArea from 'antd/lib/input/TextArea'
import React,{useRef,useState} from 'react'
import { CgNotes} from "react-icons/cg";
import { RiGalleryFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { ImHappy2 } from "react-icons/im";
import {useDispatch, useSelector} from 'react-redux'
import {newPost} from '../../Redux/ActionCreator/ActionCreator';
import uuid from 'react-uuid'
import {PostWrapper,PostIcon,TagAttachment,TagIconBg,H4,CreateButton,ChooseFile,AttachmentIcons,Attchments,HappyAttachment,OptionButton,EmojiIconBg,IconTagName,IconBg} from '../../Styles/CreatePost'





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
            id:uuid(),
            textValue:textData,
            like:false,
            comments:[],
            postLikeCount : 0       
        }
        dispatch(newPost(postInputs));
        setTextData('')
        alert('Posted Successfully....!')
    }
    const fileClickHandler=()=>{
        fileRef.current.click();
    }


    const postValue=useSelector(state=>state.postData)
    const value=postValue[0];
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
