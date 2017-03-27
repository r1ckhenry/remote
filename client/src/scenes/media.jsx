import React from 'react';
import { connect } from 'react-redux';

import Nav from "../components/Nav"

const Media = ( state ) => {

  return(
    <div>
      <Nav />
    </div>
  )
}

const mapStateToProps = ( state ) => {
  console.log( "state", state )
  return state
}

export default connect( mapStateToProps )( Media );
