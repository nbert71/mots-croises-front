<h2 class="text-green-600 font-bold text-2xl">Vos {letters_size} lettres</h2>

<div class=" w-1/3 grid grid-cols-2 gap-3 my-4">
    {#each letters as letter, i}
        <Letter letter={letters[i]} />
    {/each}
</div>

<script>
    import Letter from "./Letter.svelte";

    export let letters_size;

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXZ".split('').slice(0, letters_size);

</script>