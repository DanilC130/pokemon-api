import { useState, useEffect } from "react";
import axios from 'axios';

const OnePokemon = props => {
    const { pokemon } = props;
    const [thisPokemon, setThisPokemon] = useState({
        name: "",
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

            <p>Hi I am {pokemon.name}</p>
            {/* <p>And my url is {pokemon.url}</p> */}
            <img src={thisPokemon.sprites.front_default} alt="" />


        </>

    )
}

export default OnePokemon;