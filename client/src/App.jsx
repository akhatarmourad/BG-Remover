import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';
import Pricing from './pages/Pricing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/remover' element={ <Result /> } />
        <Route path='/pricing' element={ <Pricing /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
