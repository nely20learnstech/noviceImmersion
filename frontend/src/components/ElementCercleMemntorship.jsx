import React from "react";
import "./style.css";

export const ElementCercleMentorship = () => {
  return (
    <div className="element-cercle-mentorship">
      <div className="mentoring">
        <div className="AYEZ-UN-MENTOR">Ayez Un Mentor</div>
        <p className="text-wrapper">Cherchez un mentor qui vous guidera dans vos études</p>
        <div className="side-button">
          <div className="overlap-group">
            <div className="div">Chercher</div>
          </div>
        </div>
        <img className="image" alt="Image" src="image-2024-03-06-190215579-removebg-preview-1.png" />
      </div>
      <div className="cercles-d-etudes">
        <img className="img" alt="Image" src="image-2024-03-06-185036121-removebg-preview-1.png" />
        <div className="CERCLES-d-ETUDES">Cercles D’etudes</div>
        <p className="p">Pour pouvoir mieux réussir grâce à l’expérience des anciens</p>
        <div className="overlap-group-wrapper">
          <div className="div-wrapper">
            <div className="text-wrapper-2">S’informer</div>
          </div>
        </div>
      </div>
      <div className="titre">
        <div className="overlap">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="les-clubs-au-sein-de">L’entraide pour chaque étudiant</div>
        </div>
      </div>
    </div>
  );
};