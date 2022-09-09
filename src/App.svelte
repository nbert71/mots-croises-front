<Navbar />

<div class=" w-1/3 grid grid-cols-7 gap-3">
    {#each letters as letter, i}
        <Letter letter={letters[i]} />
    {/each}
</div>

<script>
    import Letter from "./components/Letter.svelte";
    import Navbar from "./components/Navbar.svelte";

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXZ".split('').slice(0, 14);

</script>