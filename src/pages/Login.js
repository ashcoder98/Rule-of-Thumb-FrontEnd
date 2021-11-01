import { StyledMain } from '../styles'
import { login } from '../services/firebase'

const Login = (props) => {
    return (
        <StyledMain>
            <h1>Login</h1>
            <button onClick={login}>Sign in with Google</button>
        </StyledMain>
    )
};
export default Login;