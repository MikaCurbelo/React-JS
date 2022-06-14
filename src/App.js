
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <div className="App">

<Router>
<NavBar></NavBar>
</Router>  


    </div>
  );
}

export default App;
