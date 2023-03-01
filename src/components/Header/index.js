import './styles.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <div>
            <nav>
                <Link to="/" className='btn_logo'><img src = { Logo } className='logo'/></Link>
                <ul>
                    <li className='item1'>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                    <li>
                        <Link to="/teste">Teste</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;