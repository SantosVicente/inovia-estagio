import './styles.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <div>
            <nav>
                <img src = {Logo} className='logo'/>
                <ul>
                    <li className='home'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;