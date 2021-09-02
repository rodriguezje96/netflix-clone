import React, {useState, useEffect } from 'react';
import axios from './axios';
import requests from './Requests';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)]);
                return req;
        }
        fetchData()
    }, []);
    console.log(movie);

    return (
        <header>

        </header>
    )
}

export default Banner
