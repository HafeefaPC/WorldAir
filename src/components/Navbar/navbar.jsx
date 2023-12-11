import React from "react";
import logo from "../../assets/logo.png"
import './navbar.css';
import { BrowserRouter as Router,Routes,Link ,Route} from "react-router-dom";





const Navbar = () => {
  return (
    <div className="navi" style={{ height: 64, position: 'relative', background: '#315573'}}>
  <div>
  <nav>
    <Link><a>Home</a></Link>
    <Link><a>About</a></Link>
    <Link><a>Contact</a></Link>
    <Link><a>Services</a></Link>
    <Link><a>Gallery</a></Link>

    
   

  </nav>
  </div>

  <img style={{width: 150, height: 54, left: 37.47, top: 14.44, position: 'absolute'}} src={logo} />

  </div>


  );
};

export default Navbar;
