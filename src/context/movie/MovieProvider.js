import React, { useReducer, useMemo, useEffect } from "react";
import MovieContext from "./MovieContext";
import MovieReducer from "./MovieReducer";
import PropTypes from "prop-types";
import { SET_MOVIES,SET_MOVIES_YEAR,SET_MOVIE_DATA,ADD_MOVIES,RESET_MOVIES} from "../types";

const MovieProvider = ({ children }) => {
  const initialState = {
    movies:[],
    selectedYear:null,
    isFetching:false,
    movieData:null,
    infinityList:true,
    years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2012,2013,2014,2015,2016]

  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

   const getMovies = async  (size) => {
    await fetch(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies?size=20&page=`+size)
    .then((res) => res.json())
    .then((result) => {
      dispatch({ type: size===0 ? RESET_MOVIES:ADD_MOVIES, payload: result?.content });
    })
  };


  const getMoviesEver = async  () => {
    await fetch(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies`)
    .then((res) => res.json())
    .then((result) => {
        dispatch({ type: SET_MOVIES, payload: result?.content.sort((a, b)=>{return b.revenue-a.revenue}).slice(0,10) });
    });
  }

  const getMoviesYear = async (year) =>  {
    await fetch(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies?start=${year}&&end=${year}`)
    .then((res) => res.json())
    .then((result) => {
        dispatch({ type: SET_MOVIES, payload: result?.content.sort((a, b)=>{return b.revenue-a.revenue}).slice(0,10) });
        dispatch({ type: SET_MOVIES_YEAR, payload: year});
    });
 }

 const getMoviesData = async (id) =>  {
  await fetch(`http://movie-challenge-api-xpand.azurewebsites.net/api/movies/${id}`)
  .then((res) => res.json())
  .then((result) => {
      dispatch({ type: SET_MOVIE_DATA, payload: result});
  });
}

  const setMoviesYear = async (year) =>  {
       dispatch({ type: SET_MOVIES_YEAR, payload: year});
   }

  const {movies, selectedYear,movieData,years,infinityList,isFetching} = state;
  const stateMemo = useMemo(() => {
    return {
      movies, 
      selectedYear,
      movieData,
      years,
      infinityList,
      isFetching,
      getMovies,
      getMoviesEver,
      getMoviesYear,
      getMoviesData,
      setMoviesYear
      };
  }, [movies, selectedYear,isFetching,years,movieData,infinityList]);


  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <MovieContext.Provider value={stateMemo}>
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MovieProvider;
