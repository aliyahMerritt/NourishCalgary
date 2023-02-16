import { Link, animateScroll as scroll } from "react-scroll";
import ProfileStyling from '../ProfileStyling';

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/" spy={true} offset={50} duration={500}>

                </Link>
                <Link to="profile" spy={true} offset={50} duration={500}>

                </Link>
                <Link to="About Us" spy={true} offset={50} duration={500}>

                </Link>
                <Link to="Introduction" spy={true} offset={50} duration={500}>

                </Link>
                <Link to="Map" spy={true} offset={50} duration={500}>

                </Link>
            </li>
        </ul>
    )
}