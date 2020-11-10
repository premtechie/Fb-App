import styled from 'styled-components';

export const Wrapper=styled.div`
    width:90%;
    margin:10px auto;
    background-color:white;
    border-radius:20px;
`
export const Img=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
`
export const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow:0 0 4px 0 #ccc;
    padding:10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
` 
export const H4=styled.div`
    margin:0 10px;
    font-size:13px;
    font-weight:bold;

`
export const Icons=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    color:blue;
    font-size:16px;
`
export const Pro=styled.div`
    display:flex;
    align-items:center;
`
export const ChatWrap=styled.div`
    padding:10px;
    display:flex;
    justify-content:start;
`
export const ChatSend=styled.div`
    padding:10px;
    display:-webkit-box;
    flex-flow:column;
    align-items:end;
    justify-content:end;    
`

export const ChatSender=styled.div`
    padding:5px 10px;
    margin:10px 0;
    background-color:lightblue;
    border-radius:20px;
    box-shadow:0 0 2px 0 #ccc;
    font-size:12px;
`
export const ChatReceiver=styled.div`
    padding:5px 10px;
    margin:10px 0;
    background-color:pink;
    border-radius:20px;
    box-shadow:0 0 2px 0px #ccc;
    font-size:12px;
`
export const InputComp=styled.div`
    width:100%;
    padding:10px;
    display:flex;
    align-items:center;
    box-shadow:0 0 4px 0px #ccc;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`
export const Input=styled.input`
    width:100%;
    border:none;
    border-radius:20px;
    border:1px solid #ccc;
    padding:5px 10px;
    outline:none;
`
export const SendBtn=styled.button`
    background-color:blue;
    border-radius:20px;
    color:white;
    padding:5px 10px;
    border:none;
    margin-left:10px;
    font-size:12px;
`