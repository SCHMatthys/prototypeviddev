import React from 'react';
import Header from '../Header';
import Footer from "../Footer"

const Films = () => {

    const films = [
        {name:"Le seigneur des anneaux: la communauté de l'anneau",length:"2h 50min",image:"https://fr.web.img6.acsta.net/medias/nmedia/00/02/16/27/69218096_af.jpg"},
        {name:"Le seigneur des anneaux: les deux tours",length:"2h 59min",image:"https://fr.web.img6.acsta.net/medias/nmedia/00/02/54/95/affiche2.jpg"},
        {name:"Le seigneur des anneaux: le retour du roi",length:"3h 21min",image:"https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",synopsis:"Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n'a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d'accomplir sa destinée? Tandis que Gandalf s'efforce de soutenir les forces brisées de Gondor, Théoden exhorte les guerriers de Rohan à se joindre au combat. Mais malgré leur courage et leur loyauté, les forces des Hommes ne sont pas de taille à lutter contre les innombrables légions d'ennemis qui s'abattent sur le royaume... Victoire se paye d'immenses sacrifices. Malgré ses pertes, la Communauté se jette dans la bataille pour la vie, ses membres faisant tout pour détourner l'attention de Sauron afin de donner à Frodon une chance d'accomplir sa quête. Voyageant à travers les terres ennemies, ce dernier doit se reposer sur Sam et Gollum, tandis que l'Anneau continue de le tenter..."}
    ];

    return (
        <div>
            <Header/>
            <main>

            </main>
            <Footer/>
        </div>
    );
};

export default Films;