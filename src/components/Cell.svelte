<div class="w-full h-full bg-white flex items-center justify-center text-3xl"
    class:revealed={isRevealed}
    class:finded={wordDiscovered && isRevealed}
    class:blank={letter.value === '-'}
    class:letter={letter.value !== '-'}
>
    {#if letter.value !== '-'}
        {letter.value}
    {/if}
</div>




<script>
    export let letter;
    export let isRevealed;
    export let wordDiscovered;
</script>

<style>
    @keyframes reveal {
        from {
            transform: scale(1);
        }

        50% {
            transform: scale(1.4);
        }

        to {
            transform: scale(1);
        }
    }

    @keyframes find {
        from {
            transform: scale(1);
        }

        50% {
            transform: scale(1.4);
        }

        to {
            transform: scale(1);
        }
    }

    .revealed {
        @apply bg-green-600 text-white;
        animation-name: reveal;
        animation-duration: 0.5s;

    }
    .finded { 
        @apply bg-gradient-to-b from-white via-orange-400 to-yellow-300;
        animation-name: find;
        animation-duration: 0.5s;
    }
    .blank {@apply opacity-10 backdrop-blur-2xl;}
    .letter {@apply border border-gray-700 rounded-md;}
</style>