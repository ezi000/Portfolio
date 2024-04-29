import styled from "styled-components";
import Avatar from "./components/Avatar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Body>
          <NavBar />
          <Avatar />
          <About />
          <Skills />
          <Projects />
        </Body>
      </BrowserRouter>
    </>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 200vh;
`;

export default App;
