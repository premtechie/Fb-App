import { Menu } from 'antd';
import React from 'react'
import { TiGroupOutline } from "react-icons/ti";
import {ActionsWrapper,H4,UI_UX_Icon,Names,Count,Hella_Icon,Keytar_Icon} from '../../Styles/Shortcut';



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
