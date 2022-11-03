import { useState, useEffect } from "react";
import axios from 'axios';

const OnePokemon = props => {
    const { pokemon } = props;
    const [thisPokemon, setThisPokemon] = useState({
        sprites: {
            front_default: ""
        }
    })

    //data.sprites.front.default 
    useEffect(() => {
        axios.get(pokemon.url)
            .then(res => {
                console.log(res.data);
                setThisPokemon(res.data);
            })
            .catch(err => { })

    }, [])

    return (
        <>

            {/* <h1>Hi I am OnePokemon: {pokemon.name}</h1>
            <p>And my url is {pokemon.url}</p> */}
            <img src={thisPokemon.sprites.front_default} alt="" />


        </>

    )
}

export default OnePokemon;