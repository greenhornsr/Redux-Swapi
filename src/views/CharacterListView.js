import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchChars } from '../actions';

class CharacterListView extends React.Component {


  
  componentDidMount() {
    this.props.fetchChars()
  }

  render() {
    return (
        <div>
            {this.props.fetching &&
            // return something here to indicate that you are fetching data
            (<span> LOADING </span>)
            }
            {this.props.error && (
              <span>{this.props.error}</span>
            )}      
            <div className="CharactersList_wrapper">
              <CharacterList characters={this.props.characters} />
            </div>
        </div>
    )
  }
}

// this is the same as code block 43 through 45
// const mapStateToProps = state => ({
//   fetching: state.charsReducer.fetching,
//   characters: state.charsReducer.characters,
//   error: state.charsReducer.error,
// });

// this is the same as above
const mapStateToProps = ({ charsReducer }) => ({
  ...charsReducer
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
    {fetchChars}
)(CharacterListView);
