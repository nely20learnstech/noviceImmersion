import "../css/activities.css";
import ping from "../assets/img/top-view-new-ping-pong-paddle-with-balls-removebg-preview.png"
import basketball from "../assets/img/3d-basketball-essentials-removebg-preview (1).png"
import clock from "../assets/img/7228784-removebg-preview.png"
import soccer from "../assets/img/kerfin7_nea_2796-removebg-preview.png"
import web from "../assets/img/web_designv1_2-removebg-preview.png"
import purplecalendar from "../assets/img/purple-calendar-clock-icon-3d-reminder-notification-concept-website-ui-purple-background-3d-rendering-illustration-removebg-preview.png"
import phone from "../assets/img/m003t0606_b_hand_with_phone_07sep22-removebg-preview.png"
import card from "../assets/img/image_2024-03-06_211331228-removebg-preview.png"
import football from "../assets/img/m028t0152_b_icon_15sep22-removebg-preview.png"
import pencil from "../assets/img/9678542-removebg-preview.png"

export const ElementActivitS = () => {
  return (
    <div className="element-activit-s">
      <div className="titre">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="calendrier-scolaire">Calendrier Scolaire &amp; Activités</div>
        </div>
      </div>
      <div className="group">
        <div className="overlap">
          <img
            className="top-view-new-ping"
            alt="Top view new ping"
            src={ping}
          />
          <img className="b-icon" alt="B icon" src={football} />
          <div className="overlap-2">
            <img className="nea" alt="Nea" src={soccer}/>
            <p className="POUR-MIEUX-SUIVRE">
              Pour Mieux Suivre
              <br />
              les Autres Activites
            </p>
          </div>
          <div className="side-button">
            <div className="div-wrapper">
              <div className="text-wrapper">Voir tout</div>
            </div>
          </div>
        </div>
        <img
          className="element-basketball"
          alt="Element basketball"
          src={basketball}
        />
        <img className="web" alt="Web" src={web} />
        <div className="overlap-3">
          <div className="overlap-4">
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Consulter</div>
              </div>
            </div>
            <img
              className="purple-calendar"
              alt="Purple calendar"
              src={purplecalendar}
            />
            <div className="overlap-5">
              <p className="n-OUBLIEZ-PAS-DE">
                N’oubliez Pas De <br />
                checker Votre Edt
              </p>
              <img className="b-hand" alt="B hand" src={phone} />
            </div>
          </div>
          <img className="element-removebg" alt="Element removebg" src={pencil} />
        </div>
        <img className="img" alt="Element removebg" src={clock} />
        <img className="image" alt="Image" src={card} />
      </div>
    </div>
  );
};
