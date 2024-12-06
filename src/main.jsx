import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import ImageDetail from "./components/InfoSerie.jsx"
import AddImage from "./components/AddImage.jsx";
import imagesData from './images.json';



const router = createBrowserRouter([
{
    path: "/",
    element: <App />,},

    {
        path: "/home",
        element: <Home />,
    },

    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/imageDetail/:id",
        element: <ImageDetail/>
    },
    {
        path:"/ajouterImage",
        element:<AddImage />
    }


]);


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);