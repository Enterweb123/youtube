import React from 'react'
import styled from "styled-components";

// profile image
import Comment  from './comment';
import ProfileImg from '../../img/ProfileImg/ProfileImg.jpg';

const Container = styled.div`

`;

const NewComment = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`;

const Avatar = styled.img`
 width:50px;
 height:50px;
 border-radius:50%;
 object-fit:cover;

`;
const Input  = styled.input`
 background-color:transparent;
 border:none;
 outline:none;
 border-bottom:1px solid ${({theme})=>theme.soft};
 padding:5px;
 width:100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment> 
        <Avatar src={ProfileImg} alt='profile'/>  
        <Input  type='text' placeholder='Add a cpmment...' />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
