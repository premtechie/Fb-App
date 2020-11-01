import { Menu } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { RiPagesLine } from "react-icons/ri";


const YourPagesIcon=styled.div`
    background-color:blue;
    width:40px;
    height:40px;
    padding:3px 8px;
    font-size:24px;
    border-radius:50%;
    color:white;
`
const ActionsWrapper=styled.div`
    margin:5px 0;
    width:100%;
    margin-top:30px;
`
const Names=styled.div`
    margin-left:10px;
    font-size:13px;
    color:black;
`
const Dots=styled.div`
    width:20px;
    height:20px;
    font-size:10px;
    font-weight:bold;
    margin-left:20px;
    background:#ccc;
    display:flex;
    justify-content:center;
    align-items:center;
    color:black;
    border-radius:50%;
`


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
