import logo from '../navBar/logo.jpg'
import '../navBar/navBar.css'
import { CartWidget } from '../cartWidget/cartWidget'
import { NavLink } from 'react-router-dom'



export const NavBar = () => {

    return (
        <nav>
            <ul className="navbar-container">
                <NavLink to="/">
                   <img className="brand"src={logo} alt="logo"/>
                </NavLink>
                <NavLink exact to="/">
                    <li className="linkNav">Home</li>
                </NavLink>
                <NavLink exact to="/category/carteras">
                    <li className="linkNav">Carteras</li>
                </NavLink>
                <NavLink exact to="/category/gafas">
                    <li className="linkNav">Gafas</li>
                </NavLink>
                <NavLink exact to="/category/oufits">
                   <li className="linkNav">Oufits</li>
                </NavLink>
                <li><CartWidget/></li>
            </ul>
        </nav>

    )
}