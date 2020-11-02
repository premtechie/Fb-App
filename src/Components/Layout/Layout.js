import { Col, Row } from 'antd';
import React,{useEffect} from 'react'
import styled from 'styled-components';
import ActionButtons from '../LeftSideContent/ActionButtons';
import Explore from '../LeftSideContent/Explore';
import ShortCuts from '../LeftSideContent/ShortCuts';
import SavedPages from '../RightSideContent/SavedPages';
import SuggestedGroup from '../RightSideContent/SuggestedGroup';
import CreatePost from '../CreatePost/CreatePost';
import Posts from '../Posts/Posts';
import { useSelector } from 'react-redux';

function Layout() {
    useEffect(()=>{
        // posts=useSelector(state=>state.postData)
        console.log('hhhh')
    },[])
    return (
        <div>
            <Row style={{ minHeight:'100vh', marginTop:'60px'}} justify='center'>
                <Col xs={0} sm={0} md={0} lg={6} style={{backgroundColor:'#e0ebeb',minHeight:'100vh'}}>
                <Row justify='center'  >
                            <Col md={22} >
                                <ActionButtons />
                            </Col>
                            <Col md={22} >
                                <ShortCuts />
                            </Col>
                            <Col md={23} >
                                <Explore />
                            </Col>
                    </Row>
                </Col>
                <Col xs={20} sm={22} md={22} lg={10} style={{backgroundColor:'#e0ebeb', minHeight:'100vh'}}>
                    <Row justify='center'>
                            <Col md={24} lg={24} >
                                <CreatePost />
                                 <Posts />
                            </Col>
                    </Row>
                </Col>
                <Col xs={0} sm={0} md={0} lg={6} style={{ backgroundColor:'#e0ebeb',minHeight:'100vh'}}>
                    <Row justify='center'>
                        <Col md={22}>
                            <SavedPages/>
                        </Col>
                        <Col md={22}>
                            <SuggestedGroup />
                        </Col>
                    </Row>
                </Col>
            </Row>



        </div>
    )
}

export default Layout;
