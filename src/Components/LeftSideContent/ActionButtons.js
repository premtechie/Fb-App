import React from 'react'
import pic from '../../Assets/profile.jpg';
import {FaFacebookMessenger,FaRegNewspaper} from 'react-icons/fa';
import { MdLiveTv } from "react-icons/md";
import { Menu } from 'antd';
import {ActionsWrapper,MessengerIcon,H4,Names,NewsIcon,WatchIcon,Image} from '../../Styles/ActionButton'

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
