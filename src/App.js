import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from './components/Header/Header';
import { HomePages } from './home/HomePages';
 
function App() {
  return (
    <>
    <Router>
    <Header />
      <Routes>
           <Route exact path='/' Component={HomePages} />  
      </Routes>
    </Router>
    </>
  );
}

export default App;
