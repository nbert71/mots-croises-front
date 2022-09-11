<div class="h-10 my-2 font-bold text-yellow-500">
    {#if find > 0}
        {find} mots trouvés !
    {/if}
</div>

<div class="h-full aspect-square grid grid-cols-11 border-[10px] bg-black border-yellow-400">
    {#each Array(grid.length) as _, i}
        {#each Array(grid[0].length) as __, j}
            <Cell letter={grid[i][j]} isRevealed={letters.list.includes(grid[i][j].value) && letters.displayed[grid[i][j].value]}/>
        {/each}
    {/each}

</div>

<script>
    import Cell from "./Cell.svelte";
    let find = 3;

    export let list;
    export let letters;
    let grid = list.letters;
</script>