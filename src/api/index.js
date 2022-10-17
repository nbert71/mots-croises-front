import { token } from './../store';

let headers = new Headers({
    'Autorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
});

const fetchURL = (method, url) => {
    return fetch(url, {
        method: method,
        headers: headers
    })
    .then(res => res.json())
    // .then(data => data)
    .catch(err => {
        console.log(err);
    })
}

export default fetchURL;