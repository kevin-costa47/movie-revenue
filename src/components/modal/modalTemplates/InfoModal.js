

import React,{Fragment} from "react";
import "../Modal.css";
import { ReactComponent as Close } from '../../../close.svg';

const InfoModal = props => {
    const { movieData } = props;

    return(
      <Fragment>
        <div className="modalTop">
          <div> 
            <h1 className="modalTitle">{movieData.title}</h1>
          </div>
          <div className="closeDiv">
            <Close/>
            <span className="modalText">close</span>
          </div>
        </div>
        <div className="titleLine"></div>
        <div>
          <h1 className="modalHeader">Year</h1>
          <span className="modalText">{movieData.year}</span>
        </div>
        <div>
          <h1 className="modalHeader">Genre</h1>
          <span className="modalText">{movieData.genre}</span>
        </div>
        <div>
          <h1 className="modalHeader">Description</h1>
          <span className="modalText">{movieData.description}</span>
        </div>
        <div className="movieCast">
          <div> 
            <h1 className="modalHeader">Director</h1>
            <span className="modalText">{movieData.director}</span>
          </div>
          <div>
            <h1 className="modalHeader">Actors</h1>
            <span className="modalText">{movieData.actors}</span>
          </div>
        </div>
        <div>
          <h1 className="modalHeader">Runtime</h1>
          <span className="modalText">{movieData.runtime} mins</span>
        </div>
        <div>
          <h1 className="modalHeader">Rating</h1>
          <span className="modalText">{movieData.rating}</span>
        </div>
        <div>
          <h1 className="modalHeader">Votes</h1>
          <span className="modalText">{movieData.votes}</span>
        </div>
        <div>
          <h1 className="modalHeader">Revenue</h1>
          <span className="modalText">{movieData.revenue ? "$"+(movieData.revenue*(1000000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Unknown"}</span>
        </div>
        <div>
          <h1 className="modalHeader">Metascore</h1>
          <span className="modalText">{movieData.metascore}</span>
        </div>
    </Fragment>
    )
}

export default InfoModal;