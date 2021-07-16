import './App.css';
import Songs from './components/track';

function App() {

  const clickButton = () => {
    alert("Kamu memilih lagu");
  }

  return (
    <div className="App-header">
      <div className="container">
        <h1>My Playlist</h1>
        <div className="card">
          <Songs />
          <button id="btn-select" onClick={clickButton}>Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
