import { Menu } from 'antd';
import React from 'react'
import styled from 'styled-components';
import { TiGroupOutline } from "react-icons/ti";



const Names=styled.div`
    margin-left:10px;
    font-size:12px;
`

const UI_UX_Icon=styled.div`
    background-color:#e6fff2;
    width:35px;
    height:35px;
    padding:0 5px;
    font-size:24px;
    border-radius:50%;
    color:blue;
`
const Hella_Icon=styled.div`
    background-color:f5f5f0;
    width:35px;
    height:35px;
    padding:0 5px;
    font-size:24px;
    border-radius:50%;
    color:orange;
`
const Keytar_Icon=styled.div`
    background-color:f5f5f0;
    width:35px;
    height:35px;
    padding:0 5px;
    font-size:24px;
    border-radius:50%;
    color:red;
`
const ActionsWrapper=styled.div`
    width:100%;
    margin:10px 0;
`
const H4=styled.h4`
    margin:10px 0;
    padding:10px;
`
const Count=styled.div`
    background-color:red;
    color:white;
    height:15px;
    width:15px;
    margin-left:10px;
    font-size:9px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    -moz-box-shadow: 0 0 4px 4px #ccc;
    -webkit-box-shadow: 0 0 4px 4px #ccc;
    box-shadow: 0 0 4px 4px #ccc;

`

export default function ShortCuts() {
    return (
        <ActionsWrapper>
            <Menu
                style={{padding:'10px 20px', borderRadius:'20px' }}
                defaultSelectedKeys={[]}
                mode='vertical'
                theme='light'
            >
                <H4>Shortcuts</H4>
                    <Menu.Item key="1" style={{padding:' 3px 8px',display:'flex',alignItems:'center',justifyContent:'start',height:'100%',borderRadius:'30px'}}>
                            <UI_UX_Icon>
                                <TiGroupOutline />
                            </UI_UX_Icon>
                            <Names>UI/UX Designer</Names>
                            <Count>10</Count>
                    </Menu.Item>
                    <Menu.Item key="2" style={{padding:'3px 8px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <Hella_Icon>
                                <TiGroupOutline />
                            </Hella_Icon>
                            <Names>Hella narwal</Names>
                    </Menu.Item >
                    <Menu.Item key="3" style={{padding:'3px 8px',display:'flex',alignItems:'center',height:'100%',borderRadius:'30px'}}>
                            <Keytar_Icon>
                                <TiGroupOutline />
                            </Keytar_Icon>
                            <Names>Keytar McSw</Names>
                            <Count>10</Count>
                    </Menu.Item >

            </Menu>
        </ActionsWrapper>
    )
}
