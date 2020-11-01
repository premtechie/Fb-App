import React from 'react'
import styled from 'styled-components';
import { Menu } from 'antd';
import { TiGroupOutline } from "react-icons/ti";
import { BiCalendarCheck } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";


const Names=styled.div`
    margin-left:10px;
    font-size:14px;
`

const GroupIcon=styled.div`
    background-color:#e6fff2;
    width:43px;
    height:43px;
    padding:3px 9px;
    font-size:24px;
    border-radius:50%;
    color:blue;
`
const EventsIcon=styled.div`
    background-color: #f5f5f0;
    width:43px;
    height:43px;
    padding:3px 9px;
    font-size:24px;
    border-radius:50%;
    color:orange;
    font-weight:bold;
`
const PagesIcon=styled.div`
    background-color:#f5f5f0;
    width:43px;
    height:43px;
    padding:3px 9px;
    font-size:24px;
    border-radius:50%;
    color:red;
`
const ActionsWrapper=styled.div`
    min-width:100%;
    margin:10px 0;
    
`
const H4=styled.h4`
    font-size:16px;
    margin:15px 0;
    padding:10px;
`

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
