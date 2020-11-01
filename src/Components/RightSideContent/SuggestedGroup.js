import React from 'react'
import styled from 'styled-components';


const Wrapper=styled.div`
    margin:20px 0;
    background:white;
    width:100%;
    padding:15px 20px;
    text-align:start;
    border-radius:20px;
`
const Image=styled.img`
    width:100%;
    border-radius:20px;
    margin:10px 0;
`
const SeeMoreComp=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
`
const Button=styled.div`
    color:blue;
    background-color: #e6fff2;
    border-radius:20px;
    padding:5px 10px;
    font-size:12px;
    font-weight:bold;
`
const H4=styled.h4`
    color:gray;
`
const Title=styled.div`
    font-size:14px;
    font-weight:bold
`
const SubTitle=styled.div`
    font-size:12px;
    color:gray;
`
const Content=styled.div`
    margin:10px 0;
    display:flex;

`
const Pro=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    position:absolute;
    z-index:1;
    border:2px solid white;
    -moz-box-shadow: 0 0 4px 2px #ccc;
    -webkit-box-shadow: 0 0 4px 2px #ccc;
    box-shadow: 0 0 4px 2px #ccc;

`
const Pro1=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    position:absolute;
    z-index:3;
    margin-left:25px;
    border:2px solid white;
    -moz-box-shadow: 0 0 4px 2px #ccc;
    -webkit-box-shadow: 0 0 4px 2px #ccc;
    box-shadow: 0 0 4px 2px #ccc;

` 

const Pro2=styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    position:absolute;
    z-index:5;
    margin-left:50px;
    border:2px solid white;
    -moz-box-shadow: 0 0 4px 4px #ccc;
    -webkit-box-shadow: 0 0 4px 2px #ccc;
    box-shadow: 0 0 4px 2px #ccc;
` 

const Pro3=styled.div`
    width:30px;
    height:30px;
    border-radius:50%;
    position:absolute;
    z-index:7;
    background-color:white;
    margin-left:75px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:gray;
    font-size:10px;
    font-weight:bold;
    -moz-box-shadow: 0 0 4px 2px #ccc;
    -webkit-box-shadow: 0 0 4px 0 #ccc;
    box-shadow: 0 0 4px 3px #ccc;
` 
const ImgSeries=styled.div`
    margin-left:40px;
`
const ImgComp=styled.div`
    display:flex;
`
const JoinGroup=styled.button`
    margin:10px;
    z-index:2;
    padding:5px 10px;
    position:absolute;
    margin-left:180px;
    margin-top:133px;
    border-radius:20px;
    background-color:blue;
    color:white;
    border:none;
    font-size:12px;
`


function SuggestedGroup() {
    return (
        <Wrapper>
            <SeeMoreComp style={{display:'flex'}}>
                <H4>Suggested Groups</H4>
                <Button>See more</Button>
            </SeeMoreComp>
            <ImgComp>
                <Image alt='' src='https://static-cse.canva.com/blob/134255/How-a-love-for-parties-helped-The-Celebration-Stylist-find-her-calling-featured-image.a2304db1.jpg' />
                <JoinGroup>+ Join group</JoinGroup>
            </ImgComp>
            <Content>
                <div>
                    <Title>Anthony</Title>
                    <SubTitle>65 Friends | 1.5k members</SubTitle>
                </div>
                <ImgSeries>
                    <Pro src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <Pro1 src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU' />
                    <Pro2 src='https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70' />
                    <Pro3>+20</Pro3>
                </ImgSeries>
            </Content>


        </Wrapper>
    )
}

export default SuggestedGroup
