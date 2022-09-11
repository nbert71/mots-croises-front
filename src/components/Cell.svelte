<div class="w-25 h-25 border border-black bg-white rounded-sm flex items-center justify-center text-3xl"
    class:revealed={isRevealed}
    class:finded={isInFindedWord && isRevealed}
>
    {#if letter !== '-'}
        {letter}
    {/if}
</div>




<script>
    export let letter;
    export let isRevealed;
    let isInFindedWord = false;
</script>

<style>
    .revealed {@apply bg-leaf;}
    .finded { @apply bg-gradient-to-b from-white via-orange-400 to-yellow-300;}
</style>