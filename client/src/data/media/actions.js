export const get = ( data ) => {

    return ( dispatch ) => {
      return fetch( "/api/media" )
        .then( ( response ) => {
          return response.json()
        })
        .then( ( media ) => {
          dispatch( update( media ) )
        })
    }

}

export const update = ( media ) => {

  return {
    type: "UPDATE_MEDIA",
    media
  }

}
