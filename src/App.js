import './App.css';
import Card from './Components/Cards/Card';
import Carousel from './Components/Carousel.js/Carousel';


import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Card />
    </div>
  );
}

export default App;
