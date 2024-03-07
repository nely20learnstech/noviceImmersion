import PropTypes from "prop-types";
import "../css/specialization.css";

import cloud from "../assets/img/cloud-1.png"
import reseaux from "../assets/img/reseaux-1.png"
import img from "../assets/img/hands-on.png"
import image from "../assets/img/developpeur.png"
import image1 from "../assets/img/dev.png"
import captureDCran from "../assets/img/networking.png"
import { ElementSpecialisationWrapper } from "./ElementSpecialisationWrapper";

export const ElementSpecialisation = ({
  className
}) => {
  return (
    <> 
    
    <div className={`element-specialisation ${className}`}>
      <div className="titre">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="text-wrapper">Mieux comprendre votre filière</div>
        </div>
      </div>
      <div className="fili-re">
        <div className="GB">
          <div className="overlap">
            <div className="card-body">
              <div className="overlap-group-2">
                <div className="rectangle-2" />
                <div className="rectangle-3" />
                <p className="g-nie-logiciel-bases">Génie Logiciel &amp; Bases de Données</p>
              </div>
            </div>
            <div className="en-t-te">
              <div className="div-wrapper">
                <div className="text-wrapper-2">GB</div>
              </div>
            </div>
            <img className="image" alt="Image" src={image} />
            <div className="side-button">
              <div className="overlap-2">
                <div className="text-wrapper-3">Voir plus</div>
              </div>
            </div>
          </div>
        </div>
        <div className="SR">
          <div className="overlap-3">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-4" />
                <div className="rectangle-3" />
                <div className="administrateur-syst">Administrateur Systémes &amp; Réseaux</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="div-wrapper">
                <div className="SR-2">ASR</div>
              </div>
            </div>
            <img className="reseaux" alt="Reseaux" src={reseaux} />
            <div className="side-button-2">
              <div className="overlap-2">
                <div className="text-wrapper-4">Voir plus</div>
              </div>
            </div>
            <img className="cloud" alt="Cloud" src={cloud} />
          </div>
        </div>
        <div className="IG">
          <div className="overlap-4">
            <div className="card-body-2">
              <div className="overlap-group-3">
                <div className="rectangle-5" />
                <div className="rectangle-3" />
                <div className="text-wrapper-5">Informatique Générale</div>
              </div>
            </div>
            <div className="en-tete">
              <div className="div-wrapper">
                <div className="text-wrapper-6">IG</div>
              </div>
            </div>
            <img className="img" alt="Image" src={img} />
            <div className="side-button-3">
              <div className="overlap-2">
                <div className="text-wrapper-7">Voir plus</div>
              </div>
            </div>
            <img className="image-2" alt="Image" src={image1} />
            <img className="capture-d-cran" alt="Capture d cran" src={captureDCran} />
          </div>
        </div>

    </div>
    
 
    </div>

    {/* <ElementSpecialisationWrapper/> */}
    </>
   

    
  );
};

ElementSpecialisation.propTypes = {
  image: PropTypes.string,
  reseaux: PropTypes.string,
  cloud: PropTypes.string,
  img: PropTypes.string,
  image1: PropTypes.string,
  captureDCran: PropTypes.string,
  className : PropTypes.string,
};

