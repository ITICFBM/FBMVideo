/** Const Accion para agregar a favoritos */
export const setFavorite = payload => ( {
  type: 'SET_FAVORITE',
  payload,
} );

/** Functions delete Favorite */
export const deleteFavorite = payload => ( {
  type: 'DELETE_FAVORITE',
  payload,
} );
/** function para iniciar session */

export const loginRequest = payload => ( {
  type: 'LOGIN_REQUEST',
  payload,
} );

/** functions para cerrar session */
export const logoutRequest = payload => (
  {
    type: 'LOGOUT_REQUEST',
    payload,
  } );

/** funcion para registrar usuario */
export const registerRequest = payload => ( {
  type: 'REGISTER_REQUEST',
  payload,
} );

/** funcion para reproducir el viedeo */
export const getVideoSource = payload => ( {
  type: 'GET_VIDEO_SOURCE',
  payload,
} );

export const getVideos = payload => ( {
  type: 'GET_VIDEOS',
  payload,
} );
/**funtion de buscar */
export const isSearching = payload => ( {
  type: 'IS_SEARCHING',
  payload,
} );
