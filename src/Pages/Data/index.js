import './styles.css'
import '../Global.css'
import Header from '../../components/Header'
import { useState, useEffect } from 'react';
import request from '../../axios/configGet';
import Plot from 'react-plotly.js'
import React from 'react';
import { Popup, Marker, MapContainer, TileLayer, useMap } from 'react-leaflet'
import Mapa from '../../components/Mapa';

function Data() {
    const [posts, setPosts] = useState([]) //o posts vira um array vazio e o SetPosts modifica o valor do posts
    const [maleBloodType, setMaBlood] = useState([])
    const [femaleBloodType, setFeBlood] = useState([])

    const getPosts = async () => {
        try {
            const response = await request.get("/"); //acessa através do blogFetch a API e coloca todos os dados na const
            //var: gender, browserUserAgent, age, 

            const data = response.data.map(user => ({
                gender: user.gender,
                bloodType: user.bloodType
            }));

            let cont_oPositivo_male = 0;
            let cont_aPositivo_male = 0;
            let cont_bPositivo_male = 0;
            let cont_abPositivo_male = 0;
            let cont_oNegativo_male = 0;
            let cont_bNegativo_male = 0;

            for (let i = 0; i < data.length; i++) {
                if (data[i].gender === "male") {
                    if (data[i].bloodType === "O+") {
                        cont_oPositivo_male++;
                    }
                    if (data[i].bloodType === "A+") {
                        cont_aPositivo_male++;
                    }
                    if (data[i].bloodType === "B+") {
                        cont_bPositivo_male++;
                    }
                    if (data[i].bloodType === "AB+") {
                        cont_abPositivo_male++;
                    }
                    if (data[i].bloodType === "O-") {
                        cont_oNegativo_male++;
                    }
                    if (data[i].bloodType === "B-") {
                        cont_bNegativo_male++;
                    }
                }
            }

            var maleBloodType = []
            maleBloodType.push(cont_oPositivo_male, cont_aPositivo_male, cont_bPositivo_male, cont_abPositivo_male, cont_oNegativo_male, cont_bNegativo_male);

            let cont_oPositivo_female = 0;
            let cont_aPositivo_female = 0;
            let cont_bPositivo_female = 0;
            let cont_abPositivo_female = 0;
            let cont_oNegativo_female = 0;
            let cont_bNegativo_female = 0;

            for (let i = 0; i < data.length; i++) {
                if (data[i].gender === "female") {
                    if (data[i].bloodType === "O+") {
                        cont_oPositivo_female++;
                    }
                    if (data[i].bloodType === "A+") {
                        cont_aPositivo_female++;
                    }
                    if (data[i].bloodType === "B+") {
                        cont_bPositivo_female++;
                    }
                    if (data[i].bloodType === "AB+") {
                        cont_abPositivo_female++;
                    }
                    if (data[i].bloodType === "O-") {
                        cont_oNegativo_female++;
                    }
                    if (data[i].bloodType === "B-") {
                        cont_bNegativo_female++;
                    }
                }
            }

            var femaleBloodType = []
            femaleBloodType.push(cont_oPositivo_female, cont_aPositivo_female, cont_bPositivo_female, cont_abPositivo_female, cont_oNegativo_female, cont_bNegativo_female);

            /*
            console.log(data);
            console.log(browser);
            console.log(age);
            console.log(response);
            */

            console.log(maleBloodType);
            console.log(femaleBloodType);


            setPosts(data);
            setMaBlood(maleBloodType);
            setFeBlood(femaleBloodType);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


    /*
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    */

    return (
        <div className='data'>
            <Header />
            <div className='template'>

                <h1>Você está na Página de Visualização</h1>

                <div >
                    <div className='div_graph'>
                        <Plot
                            data={[
                                {
                                    values: femaleBloodType ? femaleBloodType : 0,
                                    labels: ['O+', 'A+', 'B+', 'AB+', 'O-', 'B-'],
                                    type: 'pie'
                                }
                            ]}
                            layout={{ width: 500, height: 400, title: 'Tipo Sanguíneo de Mulheres' }}
                        />
                        <Plot
                            data={[
                                {
                                    values: maleBloodType ? maleBloodType : 0,
                                    labels: ['O+', 'A+', 'B+', 'AB+', 'O-', 'B-'],
                                    type: 'pie'
                                }
                            ]}
                            layout={{ width: 500, height: 400, title: 'Tipo Sanguíneo de Homens' }}
                        />
                    </div>
                    <div id='map'>
                        <Mapa />
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
<Plot
    data={[
        {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            y: [centimeters ? centimeters : 0],
            type: 'scattergl',
            marker: { color: 'red' },
            name: 'Data Testing'
        }
    ]}
/>

{posts.length === 0 ? <h3>Carregando...</h3> : (
    posts.map((post) => (
        <div className="post" key={post.id}>
            <h2>{post.givenName}</h2>
        </div>
    ))
)}
*/
export default Data;