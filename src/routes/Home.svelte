<!-- Decorative image and overlay -->
<div aria-hidden="true" class="absolute inset-0 overflow-hidden">
    <img src="wallpaper.jpg" alt="" class="h-full w-full object-cover object-center">
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-70"></div>
</div>

<div class="absolute opacity-60">
    <Navbar />
</div>

{#await myData()}
    loading...
{:then user}  

    <div class="grid place-items-center w-full h-full">

        <div class="z-10 mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
            <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">Bienvenue {user.firstName} {user.lastName}</h1>
            <p class="mt-4 text-xl text-white">Viens t'amuser à jouer aux mots croisés et gagner plein d'argent !</p>
            <button on:click={newGame} type="button"
                class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8
                text-base font-medium text-gray-900 hover:bg-gray-100">
                    Commencer une partie
            </button>
        </div>

    </div>
{/await}
    
    <!-- <div class="absolute flex flex-col items-center bg-gray-200 px-2 pt-2 rounded-md">
        <h1 class="font-bold text-xl mb-4">Vos précédentes parties</h1>
        {#await gamesHistory()}
            loading...
        {:then games} 
            {#each games as game}
                <div class="flex flex-col w-full">
                    <GameHistoryItem game={game} />
                </div>
            {/each}
        {/await}
    </div> -->

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

    // async function gamesHistory() {
    //     let games = await fetchURL('GET', '/game/history');
    //     // console.log(games)
    //     return games
    // }

</script>