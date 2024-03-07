import { NavBar } from "../components/NavBar"
import video from '../video/video.mp4'
import "../css/Home.css"
import { ElementSpecialisation } from "../components/Specialization"
import { ElementClubsEt } from "../components/ClubAssociation"
import { ElementCercleMentorship } from "../components/Mentoring"
import { ElementActivitS } from "../components/Activities"
import { ElementFeedbackAnciens } from "../components/FeedBack"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <div className="bienvenue">
        <video autoPlay muted loop className="background-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlap-group">
          <div className="bienvenue-futurs">
            Bienvenue, futurs élites!
          </div>
          <div className="welcome-future">            
            Welcome, future elites!
          </div>
        </div>      
    </div>

    <ElementSpecialisation/>
    <ElementClubsEt />
    <ElementCercleMentorship/>
    <ElementActivitS/>
    <ElementFeedbackAnciens/>
    <Footer/>
    </div>
  )
}




