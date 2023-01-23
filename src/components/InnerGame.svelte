
<div class="flex justify-evenly items-center w-full h-full my-10">
    <MyLetters bind:letters={letters} bind:list={list}/>
    <Grid {list} {letters}/>
    <Gains {finded}/>
</div>




<script>
    import MyLetters from "../components/MyLetters.svelte";
    import Grid from "../components/Grid.svelte";
    import Gains from "../components/Gains.svelte";
    import { GridJS } from "./GridJS";

    export let response;
    let list = new GridJS(response.grid);
    list.find_words();
    let letters = {
        list : response.displayedLetters,
        displayed : {}
    };

    for(let i=0; i<letters.list.length;i++){
        letters.displayed[letters.list[i]]=false
    }

    $: finded = list.finded_words

    console.log(response)
</script>