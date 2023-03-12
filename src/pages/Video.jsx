import React from 'react'
import styled from 'styled-components';

// material icons
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

// profile image
import ProfileImg from '../img/ProfileImg/ProfileImg.jpg';
import Comments from '../components/Comments/Comments';

// card components
import Card from '../components/card/Card';

const Container = styled.div`
  display:flex;
  gap:24px;
  `;

const Content = styled.div`
  flex:5;
  `;

const VideoWrapper = styled.div` `;

  const Ttile = styled.h1`
  font-size:18px;
  font-weight:400;
  margin-top:10px;
  margin-bottom:10px;

  color:${({theme})=>theme.text}
  `;
  

  const Details = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
  `;

    const Info = styled.span`
    color:${({theme})=>theme.textSoft};
    `;

    const Buttons = styled.div` 
    display:flex;
    gap:20px;
    `;

    const Button = styled.div`
    color:${({theme})=>theme.text};
    display:flex;
    align-items:center;
    gap:5px;
    cursor:pointer;
    `;

  const Hr = styled.hr`
    margin:15px 0px;
    border:0.5px solid ${({theme})=>theme.soft};
  `

const Recommendation = styled.div`
  flex:2;
  `;
const Channel = styled.div`
   display: flex;
   justify-content:space-between;
  `;

const ChannelInfo = styled.div`
    display:flex;
    gap:20px;
    align-items:start;
    justify-content:center
  `;

  const ChannelImage = styled.img`
  width:50px;
  height:50px;
  object-fit: cover;
  border-radius:50%
    `;

  const ChannelDetaile = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:${({theme})=>theme.text};
    `;

    const ChannelName = styled.h1`
    font-weight:500;
    margin:0px;
      `;
    const ChannelCounter = styled.span`
    margin-top:5px;
    margin-bottom:10px;
    color:${({theme})=>theme.textSoft};
    font-size:12px;
      `;
    const ChannelDescription = styled.p`
    margin:0px;
    font-size:14px;
      `;

  const SubcribeButton = styled.button`
      background-color:red;
      color:white;
      font-weight:500;
      border:none;
      border-radius:3px;
      height:max-content;
      padding:10px 20px;
      cursor:pointer;
    `;

const Video = () => {
  return (
    <Container>

      <Content> 
        <VideoWrapper> 

          <iframe width="100%" height="500" 
            src="https://www.youtube.com/embed/Gy49PgUCas4"
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
          <Ttile>Test video</Ttile>

          <Details>
              <Info>7,948,154 views . Jun 22, 2022</Info>

              <Buttons> 
                <Button> <ThumbUpAltOutlinedIcon/>554 </Button>
                <Button> <ThumbDownAltOutlinedIcon/>554 </Button>
                <Button> <ReplyOutlinedIcon/>Share </Button>
                <Button> <AddTaskOutlinedIcon/>Save </Button>
              </Buttons>

          </Details>
          <Hr/>

          <Channel> 
            <ChannelInfo> 

              <ChannelImage src={ProfileImg}/>

              <ChannelDetaile>
                  <ChannelName>Mr.cat</ChannelName>
                  <ChannelCounter>200k subscribers</ChannelCounter>
                  <ChannelDescription>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Consequuntur 
                    est provident tenetur quae iste vitae atque
                     totam nostrum harum, asperiores sunt
                      voluptates rerum, nisi error dignissimos
                       ut commodi consequatur nobis?
                  </ChannelDescription>
              </ChannelDetaile>

            </ChannelInfo>
            <SubcribeButton>SUBSCRIBE</SubcribeButton>
          </Channel>

        </VideoWrapper> 
        <Hr/>
        <Comments/>
      </Content>

      <Recommendation> 
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
        <Card type="sm"/>  
      </Recommendation>
    </Container>
  )
}

export default Video;
