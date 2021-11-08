import { createContext } from "react";

const MovieContext = createContext({
    movies:[],
    selectedYear:null,
    isFetching:false,
    movieData:null,
    infinityList:true,
});

export default MovieContext;
