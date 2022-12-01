import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const Login = () => {
    return (
        <div className="loginPage">
            <header>
                <NavLink to="/login"> <div></div> </NavLink>
            </header>
            <main>
                <section>
                    <article>
                        <h1>Connexion:</h1>
                        <form action="actionman">
                            <input type="email" name="email" id="inputMail" placeholder="Entrez votre adresse mail"/>
                            <input type="password" name="Mot de passe" id="inputPassword" placeholder="Entrez votre mot de passe" />
                            <input type="submit" value="Connexion" />
                            <div>
                                <a href="">Mot de passe oublié ?</a>
                                <a href="">Pas encore abonné ?</a>
                            </div>
                            
                        </form>
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;