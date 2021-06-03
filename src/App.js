import './App.css';
import Home from './pages/Home';
import {Router} from '@reach/router';
import Navbar from './components/Navbar';
import PageFooter from './components/PageFooter';
import Streetwear from './pages/Streetwear';
import Shoes from './pages/Shoes';

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Home path="/"/>
        <Streetwear path="streetwear"/>
        <Shoes path="shoes"/>
      </Router>
    <PageFooter/>
    </>
  );
}

export default App;
