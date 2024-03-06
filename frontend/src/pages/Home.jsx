import { NavBar } from "../components/NavBar"
import video from '../video/videoENI.mp4'
import "../css/Home.css"

export const Home = () => {
  return (
    <div>
      <NavBar/>
      <div className="bienvenue">
        <video autoPlay muted loop className="background-video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlap-group">
          <div className="bienvenue-futurs">
            Bienvenue, futurs élites!
            <br />
            Welcome, future elites
          </div>
      </div>
    </div>
    </div>
  )
}




