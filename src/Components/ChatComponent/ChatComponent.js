import React from 'react'
import styled from 'styled-components';
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone,FiSettings } from "react-icons/fi";



const Wrapper=styled.div`
    width:90%;
    margin:10px auto;
    background-color:white;
    border-radius:20px;
`
const Img=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
`
const Header=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow:0 0 4px 0 #ccc;
    padding:10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
` 
const H4=styled.div`
    margin:0 10px;
    font-size:13px;
    font-weight:bold;

`
const Icons=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    color:blue;
    font-size:16px;
`
const Pro=styled.div`
    display:flex;
    align-items:center;
`
const ChatWrap=styled.div`
    padding:10px;
    display:flex;
    justify-content:start;
`
const ChatSend=styled.div`
    padding:10px;
    display:-webkit-box;
    flex-flow:column;
    align-items:end;
    justify-content:end;    
`

const ChatSender=styled.div`
    padding:5px 10px;
    margin:10px 0;
    background-color:lightblue;
    border-radius:20px;
    box-shadow:0 0 2px 0 #ccc;
    font-size:12px;
`
const ChatReceiver=styled.div`
    padding:5px 10px;
    margin:10px 0;
    background-color:pink;
    border-radius:20px;
    box-shadow:0 0 2px 0px #ccc;
    font-size:12px;
`
const InputComp=styled.div`
    width:100%;
    padding:10px;
    display:flex;
    align-items:center;
    box-shadow:0 0 4px 0px #ccc;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

`
const Input=styled.input`
    width:100%;
    border:none;
    border-radius:20px;
    border:1px solid #ccc;
    padding:5px 10px;
    outline:none;
`
const SendBtn=styled.button`
    background-color:blue;
    border-radius:20px;
    color:white;
    padding:5px 10px;
    border:none;
    margin-left:10px;
    font-size:12px;
`

function ChatComponent() {
    return (
        <Wrapper>
            <Header>
                <Pro>
                    <Img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' alt='p' />
                    <H4>Anthony...</H4>
                </Pro>
                <Icons>
                    <BsCameraVideo />
                    <FiPhone />
                    <FiSettings />
                    <div>X</div>
                </Icons>
            </Header>
            <ChatWrap>
                <div>
                    <ChatSender>Hello</ChatSender>
                    <ChatSender>Where are you ?</ChatSender>
                    <ChatSender>How are you ?</ChatSender>
                </div>
            </ChatWrap>
            <ChatSend>
                <div>
                    <ChatReceiver>Fine</ChatReceiver>
                    <ChatReceiver>How About you ?</ChatReceiver>
                    <ChatReceiver>New York</ChatReceiver>
                </div>
            </ChatSend>
            <InputComp>
                <Input />
                <SendBtn>Send</SendBtn>
            </InputComp>
        </Wrapper>
    )
}

export default ChatComponent
