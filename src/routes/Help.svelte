<Navbar />

Help Page

{#await getRequest()}
    <p>Requete en cours</p>
{:then data}
    <p>requete {data.title}</p>
{/await}

<script>
    import Navbar from "../components/Navbar.svelte";
    import fetchURL from '../api/index'
    // import { setToken, tokenValue } from '../store.js'

    // setToken('frhefe')
    // console.log(tokenValue())
    // setToken('wesh')
    // console.log(tokenValue())

    async function getRequest(){
        let data = await fetchURL('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        console.log(data)
        return data
    }
</script>