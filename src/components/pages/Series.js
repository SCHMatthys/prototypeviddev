import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApiSeries from '../ApiSeries';
import Footer from '../Footer';
import Header from '../Header';

const Series = ({serie}) => {

    const [series, setSeries] = useState([]);

    useEffect(()=>{
       axios.get("https://api.tvmaze.com/shows").then((apiSeries)=>setSeries(apiSeries.data)).catch((e)=> console.error(e))
   });

    return (
        <div>
            <Header/>
            <main>
                <section className="articleContainerMain">
                    {series.map((serie)=>
                        <ApiSeries serie={serie}/> )}
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Series;