import React from "react";

const NavBar = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <div>
                        <img src="img/logo37.png" />
                    </div>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Chat</a>
                    </li>
                    <li>
                        <a href="#">Activités</a>
                    </li>
                    <li>
                        <a href="#">Communautés</a>
                    </li>
                    <li>
                        <form>
                            <div className="search-btn">
                                <input
                                    type="text"
                                    placeholder="Rechercher"
                                    className="inputText"
                                />
                                <button className="loupe" onClick={() => window.location.reload()}>
                                    <img src="img/loupe35.jpg" alt="Rechercher" />
                                </button>
                                <select name="searchType" id="searchType" className="searchType">
                                    <option value="films">Films</option>
                                    <option value="series">Séries</option>
                                    <option value="people">Personnalités</option>
                                    <option value="users">Utilisateurs</option>
                                </select>
                            </div>
                        </form>
                    </li>
                    <li>
                        <div className="dropdown">
                            <a href="#" className="relative block">
                                <img
                                    alt="profil"
                                    src="/img/avatarTr.jpg"
                                    className="mx-auto object-cover rounded-full h-16 w-16"
                                />
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Inscription
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Connection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Déconnection
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;