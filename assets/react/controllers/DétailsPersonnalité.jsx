import React, { useEffect, useState } from 'react';

const DetailsPersonnalité = () => {
    return (
        <>
            <h1>Détails d'un acteur</h1>
            <div className="movie">
                <img src="pers/PullmanB.jpg" className="personnage" />
            </div>
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">P Pullman</h4>
                </div>
                <div className="overview">
                    <h1>overview</h1>
                    <p>Bill Pullman

                        <h1>BIOGRAPHIE</h1>
                        <p>William James Pullman (né le 17 décembre 1953) est un acteur américain de cinéma, de théâtre et de télévision. Après avoir obtenu une maîtrise en théâtre, </p>
                        <p>Pullman a travaillé comme professeur adjoint à l'université d'État du Montana avant de décider de se consacrer à l'art dramatique. Il a fait ses débuts au cinéma dans le film Ruthless People (1986) et a depuis joué dans d'autres films, comme Spaceballs (1987), The Accidental Tourist (1988), Sleepless In Seattle (1993), While You Were Sleeping (1995), Casper (1995), Independence Day (1996), Lost Highway (1997) et Lake Placid (1999). Il est également apparu régulièrement à la télévision, généralement dans des téléfilms, bien qu'à partir des années 2000, il ait également joué dans des mini-séries et des séries régulières, notamment dans 1600 Penn (2012-13) et The Sinner (2017-présent).</p>
                    </p>
                </div>
            </div>
            <br></br>


            <br></br>
        </>
    )
}

export default DetailsPersonnalité;