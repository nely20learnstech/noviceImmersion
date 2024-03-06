import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="overlap">
        <div className="rectangle" />
        <div className="link">
          <div className="side-button">
            <div className="overlap-group">
              <div className="text-wrapper">Autres</div>
            </div>
          </div>
          <div className="historique">
            <div className="div">Historique</div>
            <img className="img" alt="Icon historique" src="icon-historique.png" />
          </div>
          <div className="contact">
            <div className="text-wrapper-2">Contact</div>
            <img className="img" alt="Icon contact" src="icon-contact.png" />
          </div>
        </div>
        <img className="logo-ENI" alt="Logo ENI" src="logo-ENI.png" />
      </div>
    </div>
  );
};

