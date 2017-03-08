import _ from 'lodash';

export const selectAllPokemon = ({ pokemon }) => (
  // Object.keys(pokemon).map(id => pokemon[id])
  _.values(pokemon)
);
