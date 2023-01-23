
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
    import { fetchURL } from "../api";
    import { solde_store } from "../store";
    import JSConfetti from 'js-confetti';
    
    const confetti = new JSConfetti()

    export let response;

    function onEndGame(){
        console.log("End Game")
        confetti.addConfetti({
            confettiNumber: 50,
            confettiRadius: 1,
            emojis: ['🤑', '💸', '💵', '💴', '💶', '💷', '🪙', '💰', '💎']
        })
        fetchURL("GET", "/game/end").then((res)=>{
            solde_store.set(res)
        })
    }

    let list = new GridJS(response.grid, onEndGame);
    list.find_words();
    let letters = {
        list : response.displayedLetters,
        displayed : {}
    };

    for(let i=0; i<letters.list.length;i++){
        letters.displayed[letters.list[i]]=false
    }

    $: finded = list.finded_words

</script>