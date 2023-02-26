import './styles.css'
import '../Global.css'
import Header from '../../components/Header'

function Home() {
    return (
        <div className='home'>
            <Header />
            <h1>Você está na Página Inicial</h1>
        </div>
    );
}

export default Home;