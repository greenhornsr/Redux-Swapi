import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChars()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<span> LOADING </span>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.charsReducer.fetching,
  characters: state.charsReducer.characters,
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
    {fetchChars}
)(CharacterListView);
