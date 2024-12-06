import PropTypes from 'prop-types'
import images from '../images.json'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../index.css';
import '../InfoSerie.css';

export default function InfoSerie(){

    const location = useLocation();  // Récupérer l'objet location
    const pathname = location.pathname;
    const match = pathname.match(/\/imageDetail\/(\d+)/);
    const id = match[1];  // L'ID sera capturé dans le premier groupe de la regex
    console.log("ID récupéré avec useLocation:", id);
    const image = images.find(image => image.key == parseInt(id));
    console.log("image",image)
    return <>

        <h1>{image.nom}</h1>
        <div className='info-texte'>le text est : {image.text}</div>
        <div className='info-date'>  {image.date}</div>
        <img src={image.chemin} alt="testtttt" />  {/* //mettre le className dans le ficher Images.jsx */}

    </>;



}


