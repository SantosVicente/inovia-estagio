import './styles.css'
import '../Global.css'
import Header from '../../components/Header'

function User() {
    return (
        <div className='user'>
            <Header />
            <h1>Você está na Página User</h1>
        </div>
    );
}

export default User;