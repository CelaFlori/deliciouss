import styled from "styled-components";
import {motion} from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";

export const Cuisine = () => {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results)
    };

    useEffect(() => {
        // getCuisine('italian')
        console.log(params.type)
    }, [params.type])

    return(
        <div>Cuisine</div>
    );
}