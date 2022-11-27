<Navbar />

{#await myData()}
    loading...
{:then data}  
    <h1 class="font-bold text-2xl mb-8">Bienvenue {data.firstName} {data.lastName} !</h1>
    <div class="flex w-full px-36">
        <div class="w-1/2 flex flex-col items-center">
            <h1 class="font-bold text-xl mb-8">Les jeux disponibles !</h1>
            <span on:click={newGame} type="button" class="bg-amber-400 hover:bg-amber-600 cursor-pointer w-36 px-4 py-1 inline-grid place-items-center rounded-md">
                Jouer
            </span>
        </div>
        <div class="w-1/2 flex flex-col items-center">
            <h1 class="font-bold text-xl mb-8">Vos précédentes parties</h1>
        </div>
    </div>
{/await}


<script>
    import {fetchURL} from "../api";
    import { push } from "svelte-spa-router";
    import Navbar from "./../components/Navbar.svelte";

    function newGame(){
        // jouer la partie dans le back
        // update le solde dans la navbar
        push('/game')
    }

    async function myData() {
        let data = await fetchURL('GET', '/my');
        console.log(data)
        return data
    }

</script>