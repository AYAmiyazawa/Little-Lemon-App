import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Special from './pages/Special';
import Footer from './Footer';

import './App.css';


function App() {
  return (
    <div className="container">
      <Nav/>
      <Header/>
      <Main />
      <Special />
      <Footer/>
    </div>
  );
}

export default App;
