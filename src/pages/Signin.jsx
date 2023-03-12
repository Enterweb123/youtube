import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
  color:${({theme})=>theme.text};

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  height:calc(100vh - 56px);
  `;
  // nav bar height is  56px so we calculate this heights

const Wrapper = styled.div`
  background-color:${({theme})=>theme.bgLighter};
  border: 1px solid ${({theme})=>theme.soft};
  border-radius:10px;

  display:flex;
  align-items:center;
  flex-direction:column;
  gap:10px;

  padding:20px 50px;
  `;

const Title = styled.h1`
  font-size:24px;
`;

const SubTitle = styled.h1`
  font-size:20px;
  font-weight:300;
`;

const Input = styled.input`
  background-color:transparent;
  outline:none;
  border:none;

  border:1px solid ${({theme})=>theme.soft};
  padding:10px;
  border-radius:5px;

  width:100%;
`;

const Button = styled.button`
 border-radius:5px;
 border:none;
 padding:10px 20px;
 font-weight:500;
 cursor:pointer;
 background-color:${({theme})=>theme.soft};
 color:${({theme})=>theme.textSoft};
`;

const More = styled.div`
 display:flex;
 font-size:12px;
 margin-top:10px;
 color:${({theme})=>theme.textSoft};
`;

const Links = styled.div`
 margin-left:50px;
`;

const Link = styled.span`
margin-left:30px;

`;

const Signin = () => {
  return (
    <Container>

      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to Youtube</SubTitle>
        <Input placeholder='username' type='text'/>
        <Input placeholder='password' type='password'/>
        <Button> Sign in </Button>

        <Title>OR</Title>
        <SubTitle>to continue to Youtube</SubTitle>
        <Input placeholder='username' type='text'/>
        <Input placeholder='email' type='email'/>
        <Input placeholder='password' type='password'/>
        <Button>Sign up</Button>
      </Wrapper>

      <More> 
        English(USA)

        <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
        </Links>
      </More>

    </Container>
  )
}

export default Signin
