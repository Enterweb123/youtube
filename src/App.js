import styled, { ThemeProvider } from "styled-components";

// routers requirements
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// components:
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./pages/Signin";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

// pages components
import Home from "./pages/Home";
import Video from "./pages/Video";

const Container = styled.div`
  display : flex;
 `;

const Main = styled.div`
  flex:7;
  background-color:${({theme})=>theme.bg};
 `;

const Wrapper = styled.div`
 padding:22px 96px;
 `;

const App = () => {

  const [darkMode,setDarMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode? darkTheme:lightTheme}>

    <Container>
      <BrowserRouter>

          <Menu darkMode={darkMode} setDarMode={setDarMode}/>

          <Main>

            <Navbar />

            <Wrapper>
              <Routes>
                  <Route  path="/" element={<Home/>}/>
                  <Route path="/video/:id" element={<Video/>}/>
                  <Route path="/signin" element={<Signin/>}/>
              </Routes>
            </Wrapper>

          </Main>

      </BrowserRouter>
    </Container>

    </ThemeProvider>
  )
}

export default App;
