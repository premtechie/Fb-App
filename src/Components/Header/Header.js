import React from 'react'
import 'antd/dist/antd.css';
import {FaFacebookF, FaFacebookMessenger} from 'react-icons/fa';
import { AiOutlineHome,AiOutlineUsergroupAdd,AiOutlineBell,AiOutlineSetting } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileIcon from '../../Assets/profilePic.png';
import InputComponet from './InputComponet';
import {Wrapper,Compo1,Compo2,Div,ActiveIcon,Icon,Image,Hamburger} from '../../Styles/Header';

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
