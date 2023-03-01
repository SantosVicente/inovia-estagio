import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import React, { useState } from 'react';
import request from '../../axios/configGet';

function Teste() {
    const [id, setId] = useState('');

    const Remove = event => {
        event.preventDefault();
        const userId = parseInt(id, 10);
        request.delete(`/${userId}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className='home'>
            <Header />
            <h1>Você está na Página de Teste</h1>
            <form onSubmit={Remove}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="number" id="id" value={id} onChange={event => setId(event.target.value)} />
                </div>
                <button type="submit">Excluir</button>
            </form>
        </div>
    );
}

export default Teste;