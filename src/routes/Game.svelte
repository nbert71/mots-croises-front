<Navbar opacity={70}/>

{#await fetchURL('GET', '/game/new')}
    <p>Loading</p>
{:then response} 
    {#if response}
        <InnerGame {response}/>
    {:else}
        <h1 class="text-white">Vous devez recharger votre compte pour jouer</h1>
        <button on:click={()=>{push('/refill')}} type="button"
            class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8
            text-base font-medium text-gray-900 hover:bg-gray-100">
                <p>Recharger votre compte</p>
        </button>
    {/if}
    
{/await}



<script>
    import Navbar from "../components/Navbar.svelte";
    import InnerGame from "../components/InnerGame.svelte";
    import { push } from "svelte-spa-router";
    import {GridJS} from "../components/GridJS.js";
    import { fetchURL } from "./../api";

</script>