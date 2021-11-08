import {SET_MOVIES,SET_MOVIES_YEAR,SET_MOVIE_DATA,ADD_MOVIES,RESET_MOVIES} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      return {  
        ...state,
        movies: state.movies.concat(action.payload),
      };
    case RESET_MOVIES:
      return {  
        ...state,
        movies: action.payload,
        infinityList:true,
      };
    case SET_MOVIES:
      return {  
        ...state,
        movies: action.payload,
        infinityList:false,
      };
    case SET_MOVIES_YEAR:
       return {
        ...state,
        selectedYear: action.payload,
        infinityList:false,
      };
    case SET_MOVIE_DATA:
      return {
        ...state,
        movieData: action.payload,
      };
    default:
      return state;
  }
};
