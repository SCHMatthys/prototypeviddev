import React from 'react';
import Gland from "../assets/images/Gland.png"
import Logo from "../assets/images/LogoViddeV.png"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navContainerHeader">
                <div className="logoContainer">
                    <img src={Logo} alt="Logo ViddeV" />
                </div>
                <ul>
                    <li>
                        <NavLink to="/"> Accueil </NavLink>
                    </li>
                    <li>
                        <NavLink to="/films"> Films </NavLink>
                    </li>
                    <li>
                        <NavLink to="/series"> Series </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nouveautes"> Nouveautes</NavLink>
                    </li>
                </ul>
                <div className="divNavHeader">
                    <input type="search" name="Recherche" id="inputSearchHeader" placeholder="Rechercher" />
                    <div className="profilPicture">
                        <span>♦</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;