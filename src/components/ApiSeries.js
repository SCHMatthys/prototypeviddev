import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiSeries = ({serie}) => {
    return(
        <article>
            <div>
                <img src={serie.image.medium} alt={"Image de la serie "+serie.name}/>
            </div>
            <h2> {serie.name} </h2>
        </article>
    )
};

export default ApiSeries;