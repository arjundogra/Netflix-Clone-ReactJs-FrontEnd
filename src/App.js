import React from "react";
import Row from "./Row";
import "./App.css";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargerRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchAction} />
      <Row title="Romantic Movies" fetchUrl={request.fetchRomance} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorror} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
