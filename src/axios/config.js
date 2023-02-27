import axios from "axios";

const blogFetch = axios.create ({
    baseURL: "http://inovia.gbf3dqe5f0dydxhv.eastus.azurecontainer.io:3000/api",
    headers: {
        'Access-Control-Allow-Origin' : '*'   
    }
});

export default blogFetch;