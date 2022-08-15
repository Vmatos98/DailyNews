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

// const methods = [
//     'get',
//     'post',
//     'put',
//     'delete'
// ];

// const axiosWrapper = {};

// const queryStringBuilder = query => Object.keys(query).length ? '?' + Object.keys(query).map(k => `${k}=${query[k]}`).join('&') : '';

// const instance = axios.create({
//     // baseURL: 'https://dailynews-api.herokuapp.com'//
//     baseURL: 'http://localhost:5000'
// });

// for (const method of methods) {
//     axiosWrapper[method] = async function (route, body, query = {}, complete = false) {
//         try {
//             const url = `${route}${queryStringBuilder(query)}`;

//             const request = await instance({
//             method,
//             url,
//             data: body
//         });

//             return complete ? request : request.data;
//         } catch (err) {
//             console.error(err);
//             return Promise.reject(err.response);
//         }
//     }
// }

// export default axiosWrapper;