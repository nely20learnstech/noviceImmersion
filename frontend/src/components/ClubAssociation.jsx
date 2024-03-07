import "../css/ClubAssociation.css";
import  CE2 from "../assets/img/C2E.png"
import  C3LF from "../assets/img/C3LF.jpg"
import  codecloud from "../assets/img/codecloud.jpg"
import  ECPENI from "../assets/img/ECP-ENI.jpg"
import  EVBC from "../assets/img/EVBC.jpg"
import  hoopers from "../assets/img/hoopers.jpg"
import  aeeni from "../assets/img/aeeni.jpg"
import  ENIDANCE from "../assets/img/ENIDANCE.jpg"
import  artceni from "../assets/img/ARTCENI.jpg"
import  cyberseceni from "../assets/img/cyberseceni.jpg"
import  ping from "../assets/img/ENI-C2ET.jpg"
import  dsa from "../assets/img/ENIDSA.jpg"
import  soccer from "../assets/img/ENIsoccer.jpg"

export const ElementClubsEt = () => {
  return (
    <div className="element-clubs-et">
      <img className="ellipse" alt="Ellipse" src={dsa} />
      <img className="img" alt="Ellipse" src={soccer} />
      <img className="ellipse-2" alt="Ellipse" src={CE2}/>
      <img className="ellipse-3" alt="Ellipse" src={ENIDANCE} />
      <img className="ellipse-4" alt="Ellipse" src={artceni} />
      <img className="ellipse-5" alt="Ellipse" src={codecloud} />
      <img className="ellipse-6" alt="Ellipse" src={EVBC} />
      <img className="ellipse-7" alt="Ellipse" src={hoopers} />
      <img className="ellipse-8" alt="Ellipse" src={cyberseceni} />
      <img className="ellipse-9" alt="Ellipse" src={C3LF} />
      <img className="ellipse-10" alt="Ellipse" src={ECPENI} />
      <img className="ellipse-11" alt="Ellipse" src={ping} />
      <div className="titre">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <p className="text-wrapper">Les clubs au sein de l’ENI</p>
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <p className="l-association-des">L’Association des Etudiants de l’ENI</p>
        </div>
      </div>
      <p className="en-tant-qu-tudiant-l">
        En tant qu&#39;étudiant à l’Ecole Nationale d’Informatique, vous serez automatiquement membre de
        l&#39;Association des Etudiants de l’ENI (AEENI).
      </p>
      <div className="group">
        <div className="overlap">
          <div className="group-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="ellipse-12" alt="Ellipse" src="ellipse-19.svg" />
                <img className="ellipse-13" alt="Ellipse" src="ellipse-5.svg" />
                <img className="ellipse-14" alt="Ellipse" src="ellipse-18.png" />
              </div>
            </div>
          </div>
          <img className="ellipse-15" alt="Ellipse" src="image.png" />
        </div>
      </div>
    </div>
  );
};
