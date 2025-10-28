import "./Header.css";
import chefClaudeLogo from "../../assets/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <div className="header-logo">
          <img
            src={chefClaudeLogo}
            alt="Logo Icon for Chef Claude"
            className="header-logo-icon"
          />
        </div>
        <div>
          <h1 className="header-text">Chef Claude</h1>
        </div>
      </div>
    </header>
  );
}
