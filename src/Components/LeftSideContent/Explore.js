import React from 'react'
import { Menu } from 'antd';
import { TiGroupOutline } from "react-icons/ti";
import { BiCalendarCheck } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import {ActionsWrapper,H4,Names,GroupIcon,EventsIcon,PagesIcon} from '../../Styles/Explore'


function Explore() {
    return (
        <ActionsWrapper>
            <Menu
                style={{padding:'10px 20px', borderRadius:'20px' }}
                defaultSelectedKeys={[]}
                mode='vertical'
                theme='light'
            >
                <H4>Explore</H4>
                    <Menu.Item key="1" style={{padding:'5px 10px',display:'flex',alignItems:'center',justifyContent:'start',height:'100%',borderRadius:'30px'}}>
                            <GroupIcon>
                                <TiGroupOutline />
                            </GroupIcon>
                            <Names>Groups</Names>
                    </Menu.Item>
                    <Menu.Item key="2" style={{padding:'5px 10px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <EventsIcon>
                                <BiCalendarCheck />
                            </EventsIcon>
                            <Names>Events</Names>
                    </Menu.Item >
                    <Menu.Item key="3" style={{padding:'5px 10px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <PagesIcon>
                                <RiPagesLine />
                            </PagesIcon>
                            <Names>Pages</Names>
                    </Menu.Item >
            </Menu>
        </ActionsWrapper>
    )
}

export default Explore
