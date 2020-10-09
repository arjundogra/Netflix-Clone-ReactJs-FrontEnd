import axios from './axios';
import React, { useState,useEffect } from 'react';

function Row({title, fetchUrl}) {
    const [movies, setMovies]= useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
        }
        fetchData();
    }, [])


    return (
        <div>
            <h2>{title}</h2>
            {/* Containers */}
        </div>
    )
}

export default Row
