import './App.css';
import Home from './pages/Home';
import {Router} from '@reach/router';

function App() {
  return (
    <Router>
      <Home path="/"/>
    </Router>
  );
}

export default App;
