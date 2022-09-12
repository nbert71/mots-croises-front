<script>
    export let letter;
    export let displayed;
    export let list;

    function reveal() {
        displayed = true;
        list.discover_letter(letter);
        list = list;
    }
</script>

<button on:click={reveal} class="w-full aspect-square cursor-pointer flex items-center justify-center text-5xl
    border border-black rounded-md bg-white shadow-lg hover:bg-gray-100 hover:scale-110 transition-all">
    {#if displayed}
        {letter}
    {:else}
        ?
    {/if}
</button>