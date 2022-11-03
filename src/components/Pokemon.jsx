import { useState, useEffect } from "react";
import axios from 'axios';
import OnePokemon from "./OnePokemon";

const Pokemon = props => {

    const [allPokemon, setAllPokemon] = useState([]);

    const api = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                // console.log(res.data.results);
                setAllPokemon(res.data.results);
                // console.log(allPokemon);
            })
            .catch(err => {
                console.log(err)
            })

    }


    return (
        <div>

            <h1>Hi I am Pokemon</h1>
            <button onClick={api}>Get all Pokeymans</button>

            {
                allPokemon.map((e, key) =>
                    <OnePokemon key={key} pokemon={e} />

                )
            }

        </div>

    )
}

export default Pokemon;