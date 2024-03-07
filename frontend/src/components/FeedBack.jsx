
import "../css/feedback.css";

// export const ElementFeedbackAnciens = () => {
//   return (
//     <div className="element-feedback-anciens">
//       <div className="overlap">
//         <div className="titre">
//           <div className="overlap-group">
//             <div className="rectangle" />
//             <div className="feedback-des-anciens" />
//             <p className="text-wrapper">Les anciens et leur feedback</p>
//           </div>
//         </div>
//         <div className="div">
//           <img className="img" alt="Rectangle" src="rectangle-39.png" />
//           <p className="REGARDEZ-CE-QUE-LES">
//             REGARDEZ CE QUE LES <br />
//             ANCIENS ETUDIANTS DE L’ENI <br />
//             ONT A DIRE ...
//           </p>
//         </div>
//         <div className="side-button">
//           <div className="div-wrapper">
//             <div className="text-wrapper-2">Voir les feedback</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


export const ElementFeedbackAnciens = ()  => {
  return (
    <>
      <section className="feedback-container">
        <div className="feedback-content">
          <div className="feedback-text-column">
          <div className="overlap-group">
              <div className="rectangle" />
              <div className="div" />
              <div className="calendrier-scolaire">Les anciens et leur feedback</div>
          </div>
            {/* <header>
              <h1 className="feedback-heading"></h1>
            </header> */}
            <p className="feedback-subtitle">
              REGARDEZ CE QUE LES <br /> ANCIENS ETUDIANTS DE L’ENI <br /> ONT A DIRE ...
            </p>
            <button className="feedback-cta">Voir les feedback</button>
          </div>
          <aside className="feedback-img-column">
            <img className="feedback-img" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/803ad33738eb17ed70bb0f5ca703df833b7cd465e48a0b61057239fc18336240?apiKey=3caa32768e0e45608f0cff37d09661ff&" alt="Feedback from alumni" />
          </aside>
        </div>
      </section>
    </>
  );
}