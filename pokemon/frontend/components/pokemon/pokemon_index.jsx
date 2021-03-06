import React from 'react';

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
      {this.props.pokemon.map((pokemon, idx) => {
        return (
          <li key={idx}>
            {pokemon.name}
            <br />
            <img src={pokemon.image_url} />
          </li>
        );
      })}
      </ul>
    );
  }
}

export default PokemonIndex;
