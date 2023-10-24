
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <Header/>
        <Navbar/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
