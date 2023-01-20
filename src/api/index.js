import { getToken } from './../store';

let baseURL = 'http://localhost:3000';


let headers = new Headers({
    'Authorization': `Bearer ${getToken()}`,
    'Content-Type': 'application/json'
});

const fetchURL = (method, url, data={}) => {
    if(method == 'GET'){
        return fetch(baseURL + url, {
                method: method,
                headers: headers
            })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            })
    } else {
        return fetch(baseURL + url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        })
    }
    
}

const fetchStatus = (method, url) =>{
    return fetch(baseURL + url, {
        method: method,
        headers: headers
    })
    .then(res => res.status)
    .catch(err => {
        console.log(err);
    })
}

export {fetchURL, fetchStatus};