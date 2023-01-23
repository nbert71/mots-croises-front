<div aria-hidden="true" class="absolute inset-0 overflow-hidden -z-10">
    <img src="wallpaper.jpg" alt="" class="h-full w-full object-cover object-center">
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-70"></div>
</div>

<Navbar opacity={70}/>

{#await fetchURL('GET', '/game/new')}
    <p>Loading</p>
{:then response} 
    <InnerGame {response}/>
{/await}



<script>
    import Navbar from "../components/Navbar.svelte";
    import InnerGame from "../components/InnerGame.svelte";
    
    import {GridJS} from "../components/GridJS.js";
    import { fetchURL } from "./../api";

</script>