import {BrowserRouter, Routes,Route } from 'react-router-dom';
import LoginComponent from './Components/login'
import HomeComponent from './Components/home'
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={HomeComponent}/>
          <Route exact path='/login' Component={LoginComponent}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;