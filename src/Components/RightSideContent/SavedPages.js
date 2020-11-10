import { Menu } from 'antd';
import React from 'react'
import { RiPagesLine } from "react-icons/ri";
import {ActionsWrapper,YourPagesIcon,Names,Dots} from '../../Styles/SavedPages'



function SavedPages() {
    return (
        <ActionsWrapper>
            <Menu
                style={{padding:'5px 15px',justifyContent:'space-between', borderRadius:'20px', display:'flex',alignItems:'center' }}
                defaultSelectedKeys={['1']}
                mode='vertical'
                theme='light'
            >
                <Menu.Item
                    key='1' style={{width:'230px',padding:' 6px 8px',display:'flex',alignItems:'center',justifyContent:'start',height:'100%',borderRadius:'30px'}}
                >
                    <YourPagesIcon>
                        <RiPagesLine />
                    </YourPagesIcon>
                    <Names>Your Pages</Names>
                </Menu.Item>
                <Dots>:</Dots>    
            </Menu>                        
        </ActionsWrapper>
    )
}

export default SavedPages
