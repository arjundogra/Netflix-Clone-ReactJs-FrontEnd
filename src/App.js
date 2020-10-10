import React from 'react';
import Row from "./Row";
import './App.css';
import request from './request'

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
