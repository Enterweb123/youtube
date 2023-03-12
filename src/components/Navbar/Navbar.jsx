import React from "react";
import styled from "styled-components";

// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
    position:sticky;
    top:0px;
    background-color:${({theme}) => theme.bgLighter};
    height:56px;
    color:${({theme}) => theme.text};
`;

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    padding:0px 20px;
    justify-content:flex-end;
    position:relative;
`;

const Search = styled.div`
    position:absolute;
    left:0px;
    right:0px;
    width:40%;
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:5px;
    border:1px solid #ccc;
    border-radius:10px;
`;

const Input = styled.input`
    border:none;
    background-color:transparent;
    width:100%;
    outline:none;
    color:${({theme})=>theme.text};
    margin:0px
`;

const LoginButton = styled.button`
    padding:5px 15px;
    background-color:transparent;
    color:#3ea6ff;
    border:1px solid  #3ea6ff;
    font-weight:500;
    border-radius:3px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:5px;
`;

const Navbar = () => {

  return (
    <Container>

      <Wrapper>
        <Search>
          <Input type="text" placeholder="Search"/>
          <SearchOutlinedIcon/>
        </Search>

        <Link to="/signin" style={{textDecoration:"none",color:"inherit"}}>
          <LoginButton>
              <AccountCircleOutlinedIcon />
              SIGN IN
          </LoginButton>
        </Link>
        
      </Wrapper>

    </Container>
  )
}

export default Navbar;
