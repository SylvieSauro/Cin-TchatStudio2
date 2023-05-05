import React from 'react';
const Detail = () => {
    return (
        <>

            <div className="movie">
                <img src="./img/Scream-6.jpg" className="poster" />
                <div className="movie-details">
                    <div className="box">

                    </div>
                    <div>
                        <h1>SCREAM VI</h1>
                        <p className="rating">7.5</p>
                        <div>
                            Propos :
                            <p className="Detail">
                                Découvrez la bande-annonce VF [Actuellement au cinéma] (2:20)
                                <a href="https://www.pathe.fr/films/scream-vi-18373"> CLIQUEZ ICI POUR VOIR</a>
                            </p>

                            <h2>Synopsis:</h2>
                            <div>
                                <p>
                                    Les survivants des derniers meurtres de Ghostface, les sœurs
                                    Samantha et Tara Carpenter et les jumeaux Chad et Mindy Meeks,
                                    quittent Woodsboro et entament un nouveau chapitre de leur vie
                                    à New York. Ils y sont à nouveau victimes d'une série de
                                    meurtres commis par un nouveau tueur Ghostface. Date de
                                    sortie : 8 mars 2023 (France)
                                </p>

                                <p>Réalisateurs : Tyler Gillett, Matt Bettinelli-Olpin</p>
                                <p>Producteurs délégués : Kevin Williamson, Chad Villella</p>
                                <p>Scénario : James Vanderbilt, Guy Busick</p>
                                <p>
                                    Scénario : James Vanderbilt, Guy Busick D'après l'œuvre
                                    originale de : Kevin Williamson Distribué par : Paramount
                                    Pictures
                                </p>
                            </div>
                        </div>
                        <div className="note">
                            <p> Note :3,6/5</p>
                            <p>89 % des utilisateurs ont aimé ce film</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Detail;