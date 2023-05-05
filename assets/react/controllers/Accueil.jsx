import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Filmmoment from './Filmmoment';
import ActivitésSite from './ActivitésSite';
import Footer from './Footer';
let API_key = "&api_key=8c9c58852f51228f852afeb4acd18b2e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc" + API_key;
let arr = ["A louer", "A la tv", "Au cinema", "En streaming"];

const Accueil = () => {
    const [search, setSearch] = useState();
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);
    /*const searchMovie = (evt) => {
        if (evt.key === "Enter") {
            axios.get("https://api.themoviedb.org/3" + search + "&api_key=8c9c58852f51228f852afeb4acd18b2e" + "&maxResults=40")
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }*/

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            //console.log(data.results);
            setData(data.results);
        });
    }, [url_set])
    const getData = (movieType) => {
        if (movieType == "A louer") {
            //url=base_url+""+API_key;
        }
        if (movieType == "A la tv") {
            //url=base_url+""+API_key;
        }
        if (movieType == "Au cinema") {
            //url=base_url+""+API_key;
        }
        if (movieType == "En streaming") {
            //url=base_url+""+API_key;
        }
        setUrl(url);
    }
    const searchMovie = (evt) => {
        if (evt.key == "Enter") {
            url = base_url + "/search/movie?api_key=8c9c58852f51228f852afeb4acd18b2e&query=" + search;
            setUrl(url);
        }
    }
    return (
        <>

            <div className="header1">
                <div className="search-btn">
                    <NavBar />
                </div>
            </div>
            <br></br>
            <h1>Films du Moment</h1>

            <div className="menu1">
                <nav>
                    <ul>
                        {
                            arr.map((value) => {
                                return (
                                    <li><a href="#" name={value} onClick={(e) => { getData(e.target.name) }}>{value}</a></li>
                                )
                            })
                        }

                    </ul>
                </nav>


            </div>

            <div className="container">
                <Filmmoment />
                <Filmmoment />
                <Filmmoment />
                <Filmmoment />
                <Filmmoment />
                <Filmmoment />

            </div >
            <br></br>
            <h1>Activités du Site</h1>
            <br></br>

            <div className="container">
                {

                    (movieData.length == 0) ? <p className="notfound">Non Trouvé</p> : movieData.map((res, pos) => {
                        return (
                            <ActivitésSite info={res} key={pos} />
                        )
                    })

                }
            </div >
            <br></br>
            <div className="Footer">
                <div className="search-btn">
                    <Footer />
                </div>
            </div>

        </>
    )
}
export default Accueil;