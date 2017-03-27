const initialState = {
  media: []
}

export const reducer = ( state = initialState, action ) => {

  switch ( action.type ) {
    case "UPDATE_MEDIA":
      return Object.assign( {}, state, { media: action.media } )
    default:
      return state;
  }
}
