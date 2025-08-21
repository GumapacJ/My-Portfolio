
import '../src/components/css/App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Skills from './components/Skills';
import Education from "./components/Education/Education";
// import Certificates from "./components/Certificate";
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';


// import Switch from './components/Switch/Switch';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height:100%;
  overflow-x: hidden;
  z-index: -1;
`;
const Wrapper = styled.div`
  background-color: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%,
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30 98%, 0 100%);
`;
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar/>
        <Body> 
          <Wrapper>
            <About/>
            <Skills />
            <Education /> 
            {/* <Certificates/>  */}
            <Project />  
            <Contact /> 
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
