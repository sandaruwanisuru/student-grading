import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul className="menuList">
          <li>
            <NavLink className="link" activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" activeclassname="active" to="/students">
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              activeclassname="active"
              to="/students-add"
            >
              Add Students
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
