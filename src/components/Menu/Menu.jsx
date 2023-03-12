import React from "react";
import styled from "styled-components";

//logo import
// import LOGOIMG from '../../img/logoTwo.png';
import LOGOIMG from '../../img/logo.png';

// import mui icons
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";

// styled component
const Container = styled.div`
 flex:1;
 background-color:${ ({theme})=>theme.bgLighter };
 height:100vh;
 color:${({theme}) => theme.text};
 font-size:14px;
 position:sticky;
 top:0px
`
const Wrapper = styled.div`
 padding:18px 26px;
`
// logo + text
const Logo = styled.div`
 display:flex;
 align-items:center;
 gap:5px;
 font-weight:bold;
 margin-bottom:25px;

`
const Img = styled.img`
 height:25px;
`

const MenuItem = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding:7.5px 0px;

&:hover{
  background-color:${({theme})=>theme.soft}
}
`

const Hr = styled.hr`
  margin:15px 0px;
  border:0.1px solid ${ ({theme}) => theme.soft};
`

const Login = styled.div`
`
const LoginButton = styled.button`
  padding:5px 15px;
  background-color:transparent;
  color:#3ea6ff;
  border:1px solid  #3ea6ff;
  font-weight:500;
  margin-top:10px;
  border-radius:3px;
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
`
const Title = styled.h2`
font-size:14px;
font-weight:400;
color: ${({theme})=>theme.text};
margin-bottom:20px;
`

const Menu = ({darkMode,setDarMode}) => {

  return (
    <Container>

      <Wrapper>

        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
          <Logo> 
            <Img src={LOGOIMG} /> 
            Youtube
          </Logo>
        </Link>

        <MenuItem>
          <HomeIcon /> Home
        </MenuItem>

        <MenuItem>
          <ExploreOutlinedIcon />  Explore
        </MenuItem>

        <MenuItem>
          <SubscriptionsOutlinedIcon />Subscriptions
        </MenuItem>

        <Hr/>
        <MenuItem>
          <VideoLibraryOutlinedIcon /> Library
        </MenuItem>

        <MenuItem>
          <HistoryOutlinedIcon />  History
        </MenuItem>

        <Hr/>

        <Login> 
            Sign in to Like video,comment, and subcribe.
          <Link to="/signin" style={{textDecoration:"none",color:"inherit"}}>
            <LoginButton>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </LoginButton>
          </Link>
        </Login>

        <Hr />

        <Title>BEST OF LAMATUBE</Title>

        <MenuItem>
          <LibraryMusicOutlinedIcon />Music
        </MenuItem>

        <MenuItem>
          <SportsBasketballOutlinedIcon />Sports
        </MenuItem>

        <MenuItem>
          <SportsEsportsOutlinedIcon /> Gaming
        </MenuItem>

        <MenuItem>
          <MovieOutlinedIcon /> Movies
        </MenuItem>

        <MenuItem>
          <ArticleOutlinedIcon /> News
        </MenuItem>

        <MenuItem>
          <LiveTvOutlinedIcon /> Live
        </MenuItem>
        <Hr/>

        <MenuItem>
          <SettingsOutlinedIcon /> Settings
        </MenuItem>

        <MenuItem>
          <FlagOutlinedIcon /> Report
        </MenuItem>

        <MenuItem>
          <HelpOutlineOutlinedIcon /> Help
        </MenuItem>

        <MenuItem onClick={()=>setDarMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
           { darkMode?("Light"):("Dark") } Mode
        </MenuItem>
 
      </Wrapper>

    </Container>
  );
};

export default Menu;
