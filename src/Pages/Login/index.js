import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import request from '../../axios/config';

function Login() {
    const [posts, setPosts] = useState([]) //o posts vira um array vazio e o SetPosts modifica o valor do posts

    const getPosts = async () => {
        try {
            const response = await request.get("/"); //acessa através do blogFetch a API e coloca todos os dados na const
            console.log(response)
            const data = response.data; //passa especificamente os dados para a const
            console.log(data)
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

            {posts.length === 0 ? <h3>Carregando...</h3> : (
                posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.givenName}</h2>
                    </div>
                ))
            )}
        </div>
    );
}

export default Login;