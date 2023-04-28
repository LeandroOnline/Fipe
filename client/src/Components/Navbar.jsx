import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <h1 className="title">~ FIPE ~</h1>
      <div className="menu">
        <Link to='/'>DashBoard</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  );
};
export default Navbar;
