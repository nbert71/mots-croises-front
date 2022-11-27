<Navbar />

Help Page

{#await test()}
    <p>Requete en cours</p>
{:then data}
    <p>{data.text}</p>
{/await}

<script>
    import Navbar from "../components/Navbar.svelte";
    import {fetchURL} from '../api'
    // import { setToken, tokenValue } from '../store.js'

    // setToken('frhefe')
    // console.log(getToken())
    // setToken('wesh')
    // console.log(getToken())

    // async function getRequest(){
    //     let data = await fetchURL('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    //     console.log(data)
    //     return data
    // }

    async function test(){
        let data = await fetchURL('GET', '/')
        console.log(data)
        return data
    }
</script>