import { Link } from 'react-router-dom';
import { logout } from '../services/firebase';
import { StyledHeader } from '../styles.js';

const Header = (props) => {

    return (
        <StyledHeader>
            <h1>Rule of Thumb</h1>
            <nav>
                <ul>
                    {/* {
                        props.user ?
                        <> */}

                       
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        {/* <li>Welcome, {props.user.displayName}</li>
                            <li> 
                            <img src={props.user.photoURL} 
                            alt={props.user.displayName}
                            />
                            </li>
                            <li onClick={logout}> Logout </li>
                        </>
                            :
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    } */}
                </ul>
            </nav>
        </StyledHeader>
        
    )
};
export default Header;