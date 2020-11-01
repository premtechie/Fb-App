import React from 'react'
import styled from 'styled-components';
import pic from '../../Assets/profile.jpg';
import {FaFacebookMessenger,FaRegNewspaper} from 'react-icons/fa';
import { MdLiveTv } from "react-icons/md";

import { Menu } from 'antd';



const Image=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
`
const Names=styled.div`
    margin-left:10px;
    font-size:13px;
`

const MessengerIcon=styled.div`
    background-color:blue;
    width:35px;
    height:35px;
    padding:0 8px;
    font-size:18px;
    border-radius:50%;
    color:white;
`
const NewsIcon=styled.div`
    background-color:orange;
    width:35px;
    height:35px;
    padding:0 8px;
    font-size:18px;
    border-radius:50%;
    color:white;
`
const WatchIcon=styled.div`
    background-color:red;
    width:35px;
    height:35px;
    padding:0 8px;
    font-size:18px;
    border-radius:50%;
    color:white;
`
const ActionsWrapper=styled.div`
    width:100%;
    margin:10px 0;
    margin-top:30px;
    
`
const H4=styled.h4`
    margin:10px 0;
    padding:10px;
`

function ActionButtons() {
    return (
        <ActionsWrapper>
                <Menu
                    style={{padding:'10px 20px', borderRadius:'20px' }}
                    defaultSelectedKeys={['1']}
                    mode='vertical'
                    theme='light'
                >   
                    <H4>ActionButtons</H4>
                    <Menu.Item key="1" style={{padding:' 5px 10px',display:'flex',alignItems:'center',justifyContent:'start',height:'100%',borderRadius:'30px'}}>
                            <Image src={pic} />
                            <Names>Sadbin walid</Names>
                    </Menu.Item>
                    <Menu.Item key="2" style={{padding:'5px 10px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <MessengerIcon>
                                <FaFacebookMessenger />
                            </MessengerIcon>
                            <Names>Messenger</Names>
                    </Menu.Item >
                    <Menu.Item key="3" style={{padding:'5px 10px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <NewsIcon>
                                <FaRegNewspaper />
                            </NewsIcon>
                            <Names>News Feed</Names>
                    </Menu.Item >
                    <Menu.Item key="4" style={{padding:'5px 10px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <WatchIcon>
                                <MdLiveTv />
                            </WatchIcon>
                            <Names>Watch Live</Names>
                    </Menu.Item >
                </Menu>
        </ActionsWrapper>
        
    )
}

export default ActionButtons
