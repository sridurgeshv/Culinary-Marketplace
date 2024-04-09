import { Link } from "react-router-dom";
import React from 'react'; 

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h1 className="header-title">Food Enthusiast Hub</h1>
        <p>"Taste the magic of your kitchen"</p>
      </div>
      <div className="header-links">
        <Link className="header-items" to="/">Home</Link>
        <Link className="header-items" to="/community">Community</Link>
        <Link className="header-items" to="/recipe">Recipe</Link>
      </div>
    </div>
  );
}
 
export default Header;