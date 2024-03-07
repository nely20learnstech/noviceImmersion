// import "../css/NavBar.css";

// export const NavBar = () => {
//   return (
//     <div className="nav-bar">
//       <div className="overlap">
//         <div className="rectangle" />
//         <div className="link">
//           <div className="side-button">
//             <div className="overlap-group">
//               <div className="text-wrapper">Autres</div>
//             </div>
//           </div>
//           <div className="historique">
//             <div className="div">Historique</div>
//             <img className="img" alt="Icon historique" src="icon-historique.png" />
//           </div>
//           <div className="contact">
//             <div className="text-wrapper-2">Contact</div>
//             <img className="img" alt="Icon contact" src="icon-contact.png" />
//           </div>
//         </div>
//         <img className="logo-ENI" alt="Logo ENI" src="logo-ENI.png" />
//       </div>
//     </div>
//   );
// };

import '../css/NavBar.css'
import "../assets/img/logoENI.png"
import cone from '../assets/img/cone.png'
// import torus from '../assets/img/torus.png'
// import icosahedron from '../assets/img/icosahedron.png'
import sphere from '../assets/img/sphere.png'



export const NavBar = () => {
  return (
    <>
        <header className="header">
            <a href="" ><div className="logo"></div></a>

            <nav className="navbar">
                <a href="" className="link">Contact</a>
                <a href="" className="link">Historique</a>
                <div className="button">
                    <span className="button__text">
                         Autres
                    </span>
                    <img src={cone} alt="" className="button__cone"/>
                    {/* <img src={torus} alt="" className="button__torus"/> 
                    <img src={icosahedron} alt="" className="button__icosahedron"/>  */}
                    <img src={sphere} alt="" className="button__sphere"/>
                </div>
            </nav>
        </header>
       
    </>
  );
}




