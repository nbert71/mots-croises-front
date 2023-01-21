<div class="backdrop-blur-lg p-4 rounded-lg flex flex-col">
    <h2 class="text-green-600 font-bold text-2xl">Vos {letters.list.length} lettres</h2>
    
    <div class="h-3/4 grid grid-cols-2 gap-3 my-4">
        {#each letters.list as letter}
            <Letter {letter} bind:displayed={letters.displayed[letter]} bind:list={list}/>
        {/each}
    </div>
    
    <div on:click={reveal_all} class="mt-5 text-2xl bg-green-600 px-6 py-2 rounded-full text-white hover:shadow-xl hover:scale-110
        transition-all cursor-pointer border-2 border-white outline-green-600 outline inline-flex items-center justify-center">
        AUTO
    </div>
</div>

<script>
    import Letter from "./Letter.svelte";

    export let letters;
    export let list;

    //let letters = "ABCDEFGHIJKLMNOPQRSTUVWXZ".split('').slice(0, letters_size);

    function reveal_all() {
        for(let letter of letters.list){
            letters.displayed[letter]=true
            list.discover_letter(letter)
        }
        list = list;
    }

</script>