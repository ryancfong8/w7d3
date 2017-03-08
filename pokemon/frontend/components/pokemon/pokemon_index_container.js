import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions.js';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  // piece of state that container subscribes to
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: (() => dispatch(requestAllPokemon()))
  // dispatch requestAllPokemon action.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
