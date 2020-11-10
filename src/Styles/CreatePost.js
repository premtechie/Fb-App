import styled from 'styled-components'

export const PostWrapper=styled.div`
    border-radius:20px;
    width:100%;
    margin:10px 0;
    margin-top:30px;
    background-color:white;
    padding:15px;
    -moz-box-shadow: 0 0 4px 2px #ccc;
    -webkit-box-shadow: 0 0 4px 2px #ccc;
    box-shadow: 0 0 4px 2px #ccc;
    @media(max-width:700px){
        padding:7px;
    }
`

export const CreateButton=styled.div`
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
export const PostIcon=styled.div`
    display:flex;
    align-items:center;
    &:hover{
        cursor:pointer;
    }
`
export const H4=styled.h4`
    margin:0 10px;
`
export const Attchments=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

`
export const AttachmentIcons=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    background-color:#e0ebeb;
    border-radius:30px;
    font-size:12px;
    @media(max-width:700px){
        padding:5px;
    }

`
export const TagAttachment=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    font-size:12px;
    background-color:pink;
    border-radius:30px;
    @media(max-width:700px){
        padding:5px;
    }
`
export const HappyAttachment=styled.div`
    display:flex;
    align-items:center;
    padding:10px;
    font-size:12px;
    background-color:lightyellow;
    border-radius:30px;
    @media(max-width:700px){
        padding:5px;
    }
`
export const IconBg=styled.div`
    background-color:blue;
    color:white;
    padding:5px;
    border-radius:20px;
    height:25px;
    width:25px;
`
export const TagIconBg=styled.div`
    background-color:red;
    color:white;
    padding:3px;
    border-radius:20px;
    height:25px;
    width:25px;
`
export const EmojiIconBg=styled.div`
    background-color:orange;
    color:white;
    padding:3px;
    border-radius:20px;
    height:25px;
    width:25px;
`
export const OptionButton=styled.div`
    background:#e0ebeb;
    width:35px;
    height:35px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:30px;
    font-weight:bolder;
    @media(max-width:700px){
        width:30px;
        height:30px;
    }
`


export const IconTagName=styled.div`
    margin:0 5px;
    cursor:pointer;
`
export const ChooseFile=styled.input`
    margin:0 10px;
    display:none;
`
