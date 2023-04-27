import React, { Component } from "react";
import './pokedex.css'

import Pokecard from './pokecard'

// for (let poke = 1; poke < 151; poke++) {
//     let currentPoke =  `https://pokeapi.co/api/v2/pokemon/${poke}`;
//     fetch(currentPoke)
//         .then((res) => res.json())
//         .then(console.log(res.json()))
// }

class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            {id: 1, name:"Bulbasaur", type: "Grass"},
            {id: 4, name: "Charmander", type: "Fire"},
            {id: 7, name: "Squirtle", type: "Water"}
        ]
    }

    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex