<Navbar opacity={0} />

{#await myData()}
    loading...
{:then user}  

    <div class="flex items-center justify-center w-full h-full">
        <div class="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-0">
            <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">Bienvenue {user.firstName} {user.lastName}</h1>
            <p class="mt-4 text-xl text-white">Viens t'amuser à jouer aux mots croisés et gagner plein d'argent !</p>
            <button on:click={newGame} type="button"
                class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8
                text-base font-medium text-gray-900 hover:bg-gray-100">
                    <p>Commencer une partie</p>
                    <span class="font-extrabold text-2xl text-f-blue-700">3 €</span>
            </button>
        </div>
    </div>
{/await}

<script>
    import {fetchURL} from "../api";
    import { push } from "svelte-spa-router";
    import Navbar from "./../components/Navbar.svelte";
    import GameHistoryItem from "./../components/GameHistoryItem.svelte";   

    function newGame(){
        // jouer la partie dans le back
        // update le solde dans la navbar
        push('/game')
    }

    async function myData() {
        let user = await fetchURL('GET', '/my');
        return user
    }
</script>