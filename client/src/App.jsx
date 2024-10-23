import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';
import Pricing from './pages/Pricing';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/remover' element={ <Result /> } />
        <Route path='/pricing' element={ <Pricing /> } />
      </Routes>
    </div>
  );
}

export default App
