import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './Requests';
import './banner.css';

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

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center",
            }}
        >

            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>

                <h1 className="banner-description">{truncate(movie?.overview, 170)}</h1>

            </div>
            <div className="banner-fade-bottom">

            </div>
        </header>
    )
}

export default Banner
