import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';


function ColorSchemesExample() {
  return (
    <ul className="nav container">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">portfolio</a>
      </li>
      <li className="nav-item">
        <Link to="/home" className="nav-link" >Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/shop" className="nav-link" >Shop</Link>
      </li>
      <li className="nav-item">
        <Link to="/toDo" className="nav-link" >Todo</Link>
      </li>
      <li className="nav-item">
        <Link to="/sign-up" className="nav-link" >Sign-up</Link>
      </li>
      <li className="nav-item">
        <Link to="/counter" className="nav-link" >Support-me</Link>
      </li>
    </ul>

  );
}

export default ColorSchemesExample;