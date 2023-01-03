import './App.css';
import Content from './component/Content';
import HeroContent from './component/HeroContent';
import NavigationBar from './component/NavigationBar';
import Produk from './component/Produk';
import AboutUs from './component/AboutUs';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroContent />
      <Content />
      <Produk />
      <AboutUs />
      
    </div>
  );
}

export default App;
