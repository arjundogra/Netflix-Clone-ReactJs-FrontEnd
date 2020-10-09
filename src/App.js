import React from 'react';
import Row from "./Row";
import './App.css';
import request from './request'

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchTrending} />
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
