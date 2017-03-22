export const get = ( data ) => {
    return ( dispatch ) => {
      return fetch( "/api/media" )
    }.then( ( response ) => {
      console.log( response )
    })
}
