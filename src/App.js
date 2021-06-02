import './App.css';
import Home from './pages/Home';
import {Router} from '@reach/router';
import Clothes from './pages/Clothes';
import Navbar from './components/Navbar';
import PageFooter from './components/PageFooter';

function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Home path="/"/>
        <Clothes path="clothes"/>
      </Router>
    <PageFooter/>
    </>
  );
}

export default App;
