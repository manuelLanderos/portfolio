import Nav from './Components/Nav/nav'
import './App.css';
import Intro from './Components/intro/intro'
import Projects from './Components/projects/projects'
import Contact from './Components/contact/contact'
import Footer from './Components/footer/footer'
import About from './Components/about/about';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Nav />
        <About />
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
