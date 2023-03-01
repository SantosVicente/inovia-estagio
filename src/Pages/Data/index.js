import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import request from '../../axios/configGet';
import Plot from 'react-plotly.js'

function Data() {
    const [posts, setPosts] = useState([]) //o posts vira um array vazio e o SetPosts modifica o valor do posts
    const [browser, setBrowser] = useState([])
    const [gender, setGender] = useState([])
    const [age, setAge] = useState([])
    const [centi, setCent] = useState([])

    const getPosts = async () => {
        try {
            const response = await request.get("/"); //acessa através do blogFetch a API e coloca todos os dados na const
            const data = response.data; //passa especificamente os dados para a const
            
            //var: gender, browserUserAgent, age, 
            
            const newData = response.data.map(user => ({
                gender: user.gender,
                age: user.birthday,
                browser: user.browserUserAgent,
                centimeters: user.centimeters
            }));
            
            
            console.log(response);
            console.log(newData);
            console.log(data);
        
                      
            setPosts(data); //seta o valor do const posts como o data

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);
    
    return (
        <div className='data'>
            <Header />
            <div className='template'>

                <h1>Você está na Página de Visualização</h1>

                <div>

                    <Plot
                        data={[
                            {
                                x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                                y: [10, 9, 7, 2, 2, 1, 8, 8, 2, 3, 8],
                                type: 'scattergl',
                                marker: {color: 'red'},
                                name: 'Data Testing'
                            }
                        ]} 
                    />

                </div>

                

            </div>
        </div>
    );
}

/*
{posts.length === 0 ? <h3>Carregando...</h3> : (
    posts.map((post) => (
        <div className="post" key={post.id}>
            <h2>{post.givenName}</h2>
        </div>
    ))
)}
*/
export default Data;