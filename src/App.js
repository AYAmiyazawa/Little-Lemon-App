import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservation";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Footer from './Footer';
import {Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
