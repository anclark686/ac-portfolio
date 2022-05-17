import { Tabs, Tab } from 'react-bootstrap';


  
const App = () => {
  const [key, setKey] = useState('home');
  return (
    
     <div>
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
    </Tabs> 

    </div>
  );
};