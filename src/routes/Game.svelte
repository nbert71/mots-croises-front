<div aria-hidden="true" class="absolute inset-0 overflow-hidden -z-10">
    <img src="wallpaper.jpg" alt="" class="h-full w-full object-cover object-center">
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-70"></div>
</div>

<Navbar opacity={70}/>

<div class="flex justify-evenly items-center w-full h-full my-10">
    
    <!-- {#if finded >= 0}
        <MyLetters bind:letters={letters} bind:list={list}/>
        <Grid {list} {letters}/>
        <Gains {finded}/>
    {:else}
        <p>loading</p>
    {/if} -->

    {#await getGame()}
        loading...
    {:then ret}
        <!-- <MyLetters bind:letters={ret.letters} bind:list={ret.list}/>
        <Grid list={ret.list} letters={ret.letters}/> -->
    {/await}


</div>


<script>
    import Navbar from "../components/Navbar.svelte";
    import MyLetters from "../components/MyLetters.svelte";
    import Grid from "../components/Grid.svelte";
    import Gains from "../components/Gains.svelte";
    import {GridJS} from "../components/GridJS.js";
    import { fetchURL } from "./../api";

    async function getGame(){
        console.log('coucou')
        let resp = await fetchURL('GET', '/game/new')
        let ret = {
            list: new GridJS(resp.grid),
            letters: resp.displayedLetters
        }
        ret.list.find_words()
        console.log(ret)
        return ret
    }

</script>