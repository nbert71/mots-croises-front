<script>
    export let letter;
    export let displayed;
    export let list;
    let enlarge = false

    function reveal() {
        displayed = true;
        list.discover_letter(letter);
        list = list;
        enlarge = true
        setTimeout( () => enlarge = false, 200);
    }
</script>

<button on:click={reveal} class="w-full aspect-square cursor-pointer flex items-center justify-center text-5xl
    border border-black rounded-md bg-white shadow-lg hover:bg-gray-100 transition-all"
    class:scale-letter={enlarge}>
    {#if displayed}
        {letter}
    {:else}
        ?
    {/if}
</button>

<style>
    .scale-letter { @apply scale-125;}
</style>