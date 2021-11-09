import React, { useContext,Fragment,useRef,useState } from "react";
import MovieContext from "../../context/movie/MovieContext";
import "./NavBar.css";
import Modal from "../modal/Modal";
import YearModal from "../modal/modalTemplates/YearModal";

const NavBar = () => {
  const movieContext = useContext(MovieContext);
  const {selectedYear,years} = movieContext;

  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const showDropdown = () => {
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); 
    const contain = modalRef.current.contains(event.target);
    if (!contain ) { 
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }

    if(event.target.className==='yearText'){
      movieContext.getMoviesYear(event.target.outerText)
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  return (
    <Fragment>
      <div>
        <h1 className="titleHeader" onClick={()=>{window.location.reload(false);}}>Movie Ranking</h1>
      </div>
      <div className="nav_bar">
        <div className="sort_buttons">
          <button id="allButton" className={`filterButton`} onClick={()=>{movieContext.getMoviesEver()}}>Top 10 Revenue</button>
          <button id="yearButton" className={`filterButton ${dropdown===''?'':'ative'}`}  onClick={()=>{showDropdown()}}>{selectedYear?  "Top 10 Revenue "+selectedYear:"Top 10 Revenue per Year"}</button>
        </div>
        <Modal className={dropdown} modalType={"yearDropdown"}  modalRef={modalRef}>
          <YearModal years={years}/>
        </Modal>
      </div>
    </Fragment>
  );
};

NavBar.propTypes = {};

export default NavBar;
