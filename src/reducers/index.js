const reducer = ( state, action ) => {
  //return state;
  switch ( action.type ) {
    case 'SET_FAVORITE':
      return {
        ...state,
        /** aqui cambiamos el stado de mylist, action .payload es lo que voy a guardar en eswa lisata  */
        mylist: [ ...state.mylist, action.payload ]
      }
    /* Creamos un nuevo case */
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter( items => items.id !== action.payload )
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find( item => item.id === Number( action.payload ) )
          || state.originals.find( item => item.id === Number( action.payload ) )
          || []

      }
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: [ ...state.isSearching, action.payload ],
      };
      break;
    case "GET_VIDEOS":
      return {
        ...state,
        searching: state.trends
          .concat( state.originals )
          .filter( item => item.title.toLowerCase().includes( action.payload.toLowerCase() ) ),
      };
      break;
    case 'SEARCH_REQUEST':
      return {
        ...state,
        searched: action.payload ? state.originals.concat( state.trends ).filter( item => item.title.toLowerCase().includes( action.payload.toLowerCase() ) ) : []
      }
    default:
      return state;

  }

}

export default reducer;