import React from 'react';
import { connect } from 'react-redux';

class Watch extends React.Component {

  render() {
    return(
      <video controls>
        <source src="media/keyboard.mp4" type="video/mp4" />
      </video>
    )
  }

}

export default Watch;
