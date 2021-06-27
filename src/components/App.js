import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
