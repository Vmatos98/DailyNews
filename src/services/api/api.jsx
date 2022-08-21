import axios from 'axios';

const token = JSON.parse(sessionStorage.getItem('token'));
    const config = {
        headers: { authorization: `Bearer ${token}` }
    };
console.log(config);
export function get(route){
    return axios.get(`${process.env.REACT_APP_LINK_API}${route}`, config);
}

export function post(route, body){
    return axios.post(`${process.env.REACT_APP_LINK_API}${route}`, body, config);
}

