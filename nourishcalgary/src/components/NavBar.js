import { Link } from 'react-scroll';
import ProfileStyling from '../ProfileStyling';

export default function NavBar() {
    return (
        <ul>
            <li>
                <Link to="/" spy={true} offset={50} duration={500}>
                    Home
                </Link>
                <Link to="profile" spy={true} offset={50} duration={500}>
                    Profile
                    <ProfileStyling />
                </Link>
            </li>
        </ul>
    )
}