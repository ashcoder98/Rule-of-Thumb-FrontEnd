import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';
import { StyledHeader } from '../styles.js';

const Header = (props) => {

    return (
        <StyledHeader>
            <h1>Rule of Thumb</h1>
            <nav>
                <ul>
                    <li>
                        <Link>Login</Link>
                    </li>
                            <li onClick={logout}>
                                 Logout
                            </li>
                </ul>
            </nav>
        </StyledHeader>
        
    )
};
export default Header;