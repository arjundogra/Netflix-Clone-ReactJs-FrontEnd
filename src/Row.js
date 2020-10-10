import axios from './axios';
import React, { useState,useEffect } from 'react';

function Row({title, fetchUrl}) {
    const [movies, setMovies]= useState([]);
    const imgURL = "https://image.tmdb.org/t/p/w200";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies)


    return (
        <div className="row">
            <h2>{title}</h2>
            {/* Containers */}
            <div className="row_posters">
                {movies.map(movie => (
                    <img src={imgURL + movie.poster_path} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
