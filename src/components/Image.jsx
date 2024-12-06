import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../InfoSerie.css';





export default function Image({image}){

    function deleteImage(e){
        console.log("deleting image "+e.target.id);
        let key = e.target.id;
        let images = JSON.parse(localStorage.getItem('images')) || [];
        images = images.filter(img => img.key != key);
        localStorage.setItem('images', JSON.stringify(images));
    }

    return <>

    <div className = "card">
    {/* <form onSubmit={deleteImage}> */}
    <button id={image.key} onClick={deleteImage} >Supprimer</button>

    {/* </form> */}
    <Link to={"/imageDetail/" + `${image.key}`}><img className='info-image' src={image.chemin} alt={"image "+`${image.nom}`} /></Link>
    </div>

    </>;
    }



Image.propTypes = {
    image: PropTypes.object.isRequired, // Obligatoire et de type string
 
};