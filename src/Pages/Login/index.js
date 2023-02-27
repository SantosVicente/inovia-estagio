import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import request from '../../axios/config';

function Login () {

    const [posts, setPosts] = useState([]) //o posts vira um array vazio e o SetPosts modifica o valor do posts

    const getPosts = async() => {
        try {
            const response = await request.get("/person"); //acessa através do blogFetch a API e coloca todos os dados na const
            const data = response.person; //passa especificamente os dados para a const
            setPosts(data); //seta o valor do const posts como o data

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='login'>
            <Header />
            <h1>Você está na Página Login</h1>
        </div>
    );
}

export default Login;