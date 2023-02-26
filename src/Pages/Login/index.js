import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogFetch from '../../axios/config';

function Login () {

    const [posts, setPosts] = useState([]) //o posts vira um array vazio e o SetPosts modifica o valor do posts

    const getPosts = async() => {

        try{

            const response = await blogFetch.get("/posts")

            const data = response.data

            setPosts(data);

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
            {posts.lenght === 0 ? <p>Carregando...</p> : (
                posts.map((post) => (
                    <div className="post" key={post.id}> 
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Login;