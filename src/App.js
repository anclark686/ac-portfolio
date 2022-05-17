import "./App.css";
import Home from "./Components/home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Projects from "./Components/projects";
import Layout from "./Components/layout";
import {React} from "react";
//import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";


  
const App = () => {
  return (
    
     <div className="fullApp">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
};
  
export default App;
