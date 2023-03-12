import React from 'react'
import styled from 'styled-components'

// thumbnail images
import ThumbnailOne from '../../img/thumnail/thumbnail1.jpg';
import ProfileImg from '../../img/ProfileImg/ProfileImg.jpg'
import { Link } from 'react-router-dom';

// styled components
const Container = styled.div`
    width: ${(props)=>props.type !== "sm" && "360px"};
    margin-bottom:${(props)=>props.type === "sm" ? "10px":"45px"};
    cursor:pointer;
    border-radius:5px;
    
    display: ${(props)=>props.type === "sm" && "flex"};
    gap:10px;
  `;

const ThumbnailImage = styled.img`
    width:100%;
    height:${(props)=>props.type === "sm" ? "120px":"202px"};
    object-fit: cover;
    flex:1;
      `;

const Details = styled.div`
    display:flex;
    margin-top:${(props)=>props.type !== "sm" && "16px"};
    gap:12px;
    flex:1;
  `;

const ChannelImage = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color:#999;
    object-fit: cover;
    display:${(props)=>props.type === "sm" && "none"}
    `;

const Texts = styled.div`
   
    `;
const Title = styled.h1`
   font-size:16px;
   margin:0px;
   font-weight:500;
   color: ${({theme})=>theme.text};
    `;

const ChannelName = styled.h2`
  font-size:14px;
  color: ${({theme})=>theme.textSoft};
  margin:9px 0px;
    `;

const Info = styled.div`
   font-size:14px;
   color:${({theme})=>theme.textSoft}
    `;

function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>

        <ThumbnailImage type={type} src={ThumbnailOne} alt='img' />

        <Details type={type}>
            <ChannelImage type={type} src={ProfileImg} alt='ProfileImg'/>
            <Texts>
              <Title>Text Video</Title>
              <ChannelName>Lama dev</ChannelName>
              <Info> 660,989 views . 1day ago </Info>
            </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
