import axios from "axios";


/*
O request abaixo funcionará somente para o realizar get e delete. 
Para fazer post ou put se deve fazer um outro arquivo q contenha mais uma 
especificação além da baseURL e o headers, sendo essa o body, que deverá
conter todos os dados que serão adicionados ou alterados
*/

const request = axios.create({
    baseURL: "http://inovia.eastus.cloudapp.azure.com/api/person",
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default request;