import ImageItem from './Image.jsx'
import React, { useState } from 'react'
import '../index.css';
import '../InfoSerie.css';

export default function Home(){
    

    const storedImages = JSON.parse(localStorage.getItem('images'));
    const [imageList,setImageList] = useState(storedImages);


    function searchImage(e){

        if(e.target.value == ""){
            setImageList(storedImages)
        }else{    
            setImageList(storedImages.filter((img)=> img.nom.toUpperCase().includes(e.target.value.toUpperCase())))        
        }
    }


     function handleAddImage(e){
        let key = imageList.length + 1;

        let imageData = {
            nom:e.target.imagetitle.value,
            key:key,
            chemin:e.target.imageurl.value,
            text:e.target.imagedesc.value,
            date:e.target.imagedate.value,
        }
        console.log(imageData, imageList)
        const updatedImageList = imageList.concat(imageData);
        setImageList(updatedImageList);
        localStorage.setItem('images', JSON.stringify(updatedImageList));

        console.log(e.target.imagename)
    
        //setImageList() 
    }
    

    return <>

        <h1>Bienvenue sur la page accueil de notre super site</h1>
        <input placeholder='Rechercher' id="searchinput" defaultValue="" onChange={searchImage}/>
        <div className="squelette">

        {imageList.map((image) => (
            <ImageItem key={image.key} image = {image}></ImageItem>
        ))
        }
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleAddImage}>
            <label htmlFor='imagename'>Image Name:</label>
            <input type='text' id='imagetitle' name='imagetitle' required/>

            <label htmlFor='imageurl'>Image URL:</label>
            <input type='text' id='imageurl' name='imageurl' required/>

            <label htmlFor='imagedesc'>Image Description:</label>
            <input type='text' id='imagedesc' name='imagedesc' required/>

            <label htmlFor='imagedate'>Image Date:</label>
            <input type='date' id='imagedate' name='imagedate' required/>

            <button type='submit'>Add Image</button>
        </form>
        </div>
        </div>


    </>;
}





