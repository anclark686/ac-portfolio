import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Projects from "./Components/projects";
import Layout from "./Components/layout";
import {React} from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { Tabs, Tab } from 'react-bootstrap';
import { DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap';

  
const App = () => {
   //const [key, setKey] = useState('home');
  return (
    <>
      <div>
      <h1>Test</h1>
        {['Info'].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title="Navigation"
            >
              <Dropdown.Item eventKey="1" href={<Home />}>Home</Dropdown.Item>
              <Dropdown.Item eventKey="2" href="./Components/about">About</Dropdown.Item>
              <Dropdown.Item eventKey="3" href="./Components/projects">Projects</Dropdown.Item>
              <Dropdown.Item eventKey="3" href="./Components/contact">Contact</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4"href="www.google.com">
                Separated link
                </Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
    </>
    
/*     <div>
      <h1>Test</h1>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="about" title="About">
        <About />
      </Tab>
      <Tab eventKey="projects" title="Projects" >
        <Projects />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Contact />
      </Tab>
    </Tabs> */

/*       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter> */
    //</div>
  );
};
  
export default App;
