import React from 'react';
import { connect } from 'react-redux';

import Nav from "../components/Nav"

const Media = () => {
  return(
    <div>
      <Nav />
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect( mapStateToProps )( Media );
