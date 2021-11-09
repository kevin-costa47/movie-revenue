import React, {useState,useContext, useRef,Fragment} from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import {ReactComponent as Eye} from '../../eye.svg';

import MovieContext from "../../context/movie/MovieContext";
import Modal from "../modal/Modal";
import InfoModal from "../modal/modalTemplates/InfoModal";


import "./TableData.css";

const TableData = () => {
  
  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const Movie = useContext(MovieContext);
  const {movies,movieData,infinityList} = Movie;

  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

  function fetchMoreListItems() {
    if(infinityList){
      setTimeout(() => {
        Movie.getMovies(movies.length/20)
        setIsFetching(false);
      }, 2000);
    }
  }

  if (movies?.length === 0) {
    return null;
  }

  const showDropdown = () => {
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); 
    const contain = modalRef?.current?.contains(event.target);
    if (!contain || event.target.nodeName==='svg') { 
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };
  
  return (
    <Fragment>
    {movies?.map((movie, index) => {
    return (
     <div className="card" key={index}>
      <div className="table_layout">
        <span className="">{movie.rank}</span>
        <span className="">{movie.title}</span>
        <span className="">{movie.year}</span>
        <span className="">{movie.revenue ? "$"+(movie.revenue*(1000000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Unknown"}</span>
        <button id="showInfo" onClick={()=>{Movie.getMoviesData(movie.id);showDropdown()}} style={{background: "transparent",border:"none"}}><Eye /></button>
        <Modal className={dropdown} modalType={"infoModal"} modalRef={modalRef}>
            {movieData && <InfoModal movieData={movieData}/>}
        </Modal>
      </div>
    </div>
    
    ); })}
    {isFetching && <h2 style={{textAlign:"center"}}>...</h2>}
    </Fragment>   
    )
 
  
};

TableData.propTypes = {};

export default TableData;
