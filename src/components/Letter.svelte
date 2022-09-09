<script>
    export let letter;
    export let revealed = false;

    function reveal() {
        revealed = true;
    }
</script>

<button on:click={reveal} class="w-full aspect-square cursor-pointer flex items-center justify-center text-5xl
    border border-black rounded-md bg-white shadow-lg hover:bg-gray-100 hover:scale-110 transition-all">
    {#if revealed}
        {letter}
    {:else}
        ?
    {/if}
</button>