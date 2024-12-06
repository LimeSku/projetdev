import ImageItem from './Image.jsx'
import React, { useState } from 'react'
// import images from '../images.json'
import '../index.css';
import '../InfoSerie.css';



 


export default function AddImage(){

    const [imageList,setImageList] = useState();

    
    return <>

        <h1>Bienvenue sur la page accueil de notre super site</h1>
        <form action='/test'>
            <input type='text'/>
            <button type='submit'></button>
        </form>

    </>;
}





