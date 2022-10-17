import { writable } from 'svelte/store';

const storedToken = localStorage.getItem('jwt')

export const token = writable(storedToken);

export function tokenValue(){
    let value
    token.subscribe(v=>{value=v})
    return value
}

export function setToken(newToken){
    localStorage.setItem('jwt', newToken)
    token.set(newToken)
}