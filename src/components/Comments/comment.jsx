import React from 'react';
import styled from 'styled-components';

// profile
import ProfileImg from '../../img/ProfileImg/ProfileImg.jpg';

const Container = styled.div`
    display:flex;
    gap:20px;
    margin:20px 0px;
`;

const Avatar = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
`;

const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    color:${({theme})=>theme.text};
`;

const Name = styled.span`
font-size:20px;
font-weight:500;
`;

const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({theme})=>theme.textSoft};
margin-left: 5px;
`;

const Text = styled.span`
font-size:14px;
`;

const comment = () => {
  return (
    <Container>
      <Avatar src={ProfileImg} />
      <Details>
        <Name> Jonh Doe <Date> 1 day ago </Date> </Name> 
        <Text>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Eligendi at hic, voluptas
            pariatur temporibus dolorum corporis
            quidem corrupti, modi labore necessitatibus
            culpa inventore nobis totam, ipsum accusantium
            laudantium. Aspernatur, eveniet. 
        </Text>  
      </Details>
    </Container>
  )
}

export default comment
