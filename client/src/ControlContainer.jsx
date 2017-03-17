import React from 'react';
import { connect } from 'react-redux';

const ControlContainer = () => {
  return(
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

const mapStateToProps = ( state ) => {
  return state
}

export default connect( mapStateToProps )( ControlContainer );
