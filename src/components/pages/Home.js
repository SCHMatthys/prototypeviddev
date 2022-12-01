import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Api from "../ApiSeries";

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <section className="sectionMainHomeCurrent">
                    <div></div>
                    <article>
                        <span>►</span>
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;