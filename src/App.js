import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import './components/NavBar/NavBar'
import { NavBar } from './components/NavBar/NavBar';
function App() {



  return (
    <div className="App">
<NavBar></NavBar>
<ItemListContainer/>

    </div>
  );
}

export default App;
