import React from 'react';
import { connect } from 'react-redux';

import Nav from "../components/Nav";

import * as mediaActionCreators from "../data/media/actions.js";

class Control extends React.Component {

  componentDidMount() {
    mediaActionCreators.get()( this.props.dispatch );
  }

  render() {
    const mediaItems = this.props.media.map( ( item, index ) => {
        return ( <li onClick={ (e) => { console.log( "clicked" ) } } key={index}>{ item }</li> )
    })

    return(
      <div>
        <Nav />
        <ul>
          { mediaItems }
        </ul>
      </div>
    )
  }

}

const mapStateToProps = ( state ) => {
  return state.data
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
});

export default connect( mapStateToProps, mapDispatchToProps )( Control );
