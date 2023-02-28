import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import React, { useState, useEffect } from 'react';
import request from '../../axios/config';

function Home() {
    const [data, setData] = useState(null);
    
    /*
    no lugar do valor 200 deverá conter um valor informado pelo usuário
    através de um select e um input em que ele escolherá pelo que ele deseja
    pesquisar, e então, realizar a pesquisa por meio deste valor. No caso abaixo
    a pesquisa por um usuário especifico esta sendo feita pelo seu ID, mas o 
    usuário poderá escolher entre. Caso a API não disponibilize rotas para acessar
    dados especificos, para realizar uma pesquisa por outro elemento que não o id, 
    você deverá percorrer cada item e conferir se aquele item é o que você está 
    procurando, e caso não seja, continue percorrendo até encontrá-lo, caso não
    encontre-o, retorne um erro ou alguma mensagem de erro para o usuário
    */
    const id = 200;

    useEffect(() => {
        request.get(`/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className='home'>
            <Header />
            <h1>Você está na Página Inicial</h1>
            {data && (
                <div>
                    <h2>Name: {data.title} {data.givenName} {data.middleInitial} {data.surname}</h2>
                </div>
            )}
        </div>
    );
}

export default Home;