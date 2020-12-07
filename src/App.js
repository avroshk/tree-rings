import svgImg from './main.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={svgImg} className="svg-img" alt="svgImg" />
      </header>
    </div>
  );
}

export default App;
