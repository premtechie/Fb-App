import React from 'react'
import styled from 'styled-components';
import 'antd/dist/antd.css';
import {FaFacebookF, FaFacebookMessenger} from 'react-icons/fa';
import { AiOutlineHome,AiOutlineUsergroupAdd,AiOutlineBell,AiOutlineSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileIcon from '../../Assets/profilePic.png';
import InputComponet from './InputComponet';

const Wrapper=styled.div`
    display:flex;
    justify-content:center;
    background-color:white;
`


const Div=styled.section`
    background-color:white;
    width:97%;
    height:80px;
    border-radius:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    -moz-box-shadow: 0 0 2px 0 #888;
    -webkit-box-shadow: 0 0 2px 0 #888;
    box-shadow: 0 0 4px 0 #888;
    position:fixed;
    top:0;
    z-index:100;
`

const Compo1=styled.div`
    display:flex;
    margin:10px 20px;
    align-items:center;
`

const ActiveIcon=styled.div`
    background-color:whitesmoke;
    width:50px;
    height:50px;
    padding:8px;
    font-size:24px;
    border-radius:50%;
    color:blue;
`
const Icon=styled.div`
    width:50px;
    padding:6px;
    font-size:24px;
    color:#ccc;
    margin-left:10px;
    &:hover{
        color:gray;
        cursor:pointer;
    }

`
const Compo2=styled.div`
    display:flex;
    align-items:center;
    width:18%;
    @media(max-width:1000px){
        display:none;
    }
`
const Image=styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin:0 20px;
`
const Hamburger=styled.div`
    display:none;
    @media(max-width:1000px){
        display:block;
    }
    margin:0 20px;
    font-size:22px;
    cursor:pointer;
    &:hover{
        color:gray;
    };
`

function Header() {
    return (
        <Wrapper>
            <Div>
                {/* Comp1 refers - facebook-icon, search-bar */}
                <Compo1>
                    <ActiveIcon>
                        <FaFacebookF />
                    </ActiveIcon>
                    <div>
                        <InputComponet />  
                    </div>             
                </Compo1>
                {/* Compo2 refers - home, messenger, add-friends */}
                <Compo2>
                    <ActiveIcon>
                        <AiOutlineHome />      
                    </ActiveIcon>
                    <Icon>
                        <FaFacebookMessenger />
                    </Icon>
                    <Icon>
                        <AiOutlineUsergroupAdd />
                    </Icon>
                </Compo2>
                {/* here compo2 refers - setting, notification, help */}
                <Compo2>
                        <Icon>
                            <AiOutlineBell />
                        </Icon>
                        <Icon>
                            <FiHelpCircle />
                        </Icon> 
                        <Icon>
                            <AiOutlineSetting />
                        </Icon>
                        <Image src={ProfileIcon} />
                </Compo2>
                <Hamburger>
                    <GiHamburgerMenu />
                </Hamburger>
            </Div>
        </Wrapper>
    )
}

export default Header;
