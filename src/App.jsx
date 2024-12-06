import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet} from "react-router-dom";
import { useEffect } from 'react';

export default function App() {
    
    useEffect(() => {
        if (!localStorage.getItem('images')) {
            localStorage.setItem('images', JSON.stringify(imagesData));
        }
    }, []);
    return (
    <>
        <nav>
        <h1>Bienvenue sur Netflux</h1>
            <Link to="/home" >Accueil</Link>{" - "}
            <Link to="/about">À propos</Link>
        </nav>
        <Outlet/>
    </>
    );
}


