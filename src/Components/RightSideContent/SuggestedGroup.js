import React from 'react'
import {Wrapper,Image,ImgComp,ImgSeries,SeeMoreComp,SubTitle,Button,H4,Title,Content,Pro,Pro1,Pro2,Pro3,JoinGroup} from '../../Styles/SuggestedGroup'


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
