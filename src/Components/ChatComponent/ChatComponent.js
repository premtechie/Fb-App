import React from 'react'
import { BsCameraVideo } from "react-icons/bs";
import { FiPhone,FiSettings } from "react-icons/fi";
import {Wrapper,Header,Pro,Img,H4,Icons,ChatWrap,ChatSender,ChatReceiver,ChatSend,InputComp,Input,SendBtn} from '../../Styles/ChatComponent'



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
