import './App.css';
import dummyData from './data/dummy-data';

function App() {

  const clickButton = () => {
    alert("Kamu memilih lagu");
  }

  return (
    <div className="App-header">
      <div className="container">
        <h1>My Playlist</h1>
        <div className="card">
          <img src={dummyData.album.images[1].url} />
          <p id="title">{dummyData.album.name}</p>
          <p id="artist">{dummyData.album.artists[0].name}</p>
          <p id="album">{dummyData.album.album_type}</p>
          <button id="btn-select" onClick={clickButton}>Select</button>
        </div>
      </div>
    </div>
  );
}

export default App;
