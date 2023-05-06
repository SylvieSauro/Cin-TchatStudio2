import React from "react";

const ActivitésSite = (movie1) => {
    console.log(movie1.info);

    let img_path = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className="movie1">
                <img src={img_path + movie.info.poster_path} className="poster" />
                <li key={movie1.info.id}></li>
                <div className="movie1-details1">
                    <div className="box">
                        <h4 className="title">{movie1.info.title}</h4>
                        <p className="rating">{movie1.info.vote_average}</p>
                    </div>
                    <div className="overview">
                        <h1>overview</h1>
                        {movie1.info.overview}
                    </div>
                </div>
            </div>


        </>
    )
}
export default ActivitésSite;