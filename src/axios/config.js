import axios from "axios";

const request = axios.create ({
    baseURL: "http://inovia.gbf3dqe5f0dydxhv.eastus.azurecontainer.io:3000/api",
    headers: {
        Authorization: {'Access-Control-Allow-Origin' : '*'}   
    }
});

export default request;