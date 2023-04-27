import React, { Component } from "react";
import './pokecard.css'

const img_src_path = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class PokeCard extends Component {
    render () {
        let imgSrc = `${img_src_path}${this.props.id}.png`
        return(
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <div className="Pokecard-img">
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
            </div>
        )
    }
}

export default PokeCard;