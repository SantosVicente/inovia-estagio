import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState } from 'react';
import request from '../../axios/configGet';

function PUT() {

    const [id, setId] = useState('');

    /*
    Não está funcionando a opção de trocar o givenName do item, 
    mas somente este, ignore e faça na função de alterar dados que 
    este dado em especifico não poderá ser alterado
    */

    const [userData, setUserData] = useState({
        givenName: '',
        middleInitial: '',
        surname: '',
        city: '',
        state: '',
        stateFull: ''
    });

    const Submit = event => {
        event.preventDefault();
        const userId = parseInt(id, 10);
        request.put(`/${userId}`, userData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='put'>
            <Header />
            <div className='template'>

                <h1>Você está na página de teste de PUT</h1>

                <h2>Editar Usuário</h2>
                <form onSubmit={Submit}>
                    <div>
                        <label htmlFor="id">ID:</label>
                        <input type="number" id="id" value={id} onChange={event => setId(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="middleInitial">Middle Initial:</label>
                        <input type="text" id="middleInitial" value={userData.middleInitial} onChange={event => setUserData({ ...userData, middleInitial: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="surname">Last Name:</label>
                        <input type="text" id="surname" value={userData.surname} onChange={event => setUserData({ ...userData, surname: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="city">Cidade:</label>
                        <input type="text" id="city" value={userData.city} onChange={event => setUserData({ ...userData, city: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="state">UF:</label>
                        <input type="text" id="state" value={userData.state} onChange={event => setUserData({ ...userData, state: event.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="stateFull">Estado:</label>
                        <input type="text" id="stateFull" value={userData.stateFull} onChange={event => setUserData({ ...userData, stateFull: event.target.value })} />
                    </div>
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default PUT;