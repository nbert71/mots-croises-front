<div class="h-10 my-2 font-bold text-yellow-500">
    {#if list.finded_words > 1}
        {list.finded_words} mots trouvés !
    {:else if list.finded_words ===1}
        1 mot trouvé !
    {/if}
</div>

<div class="h-full aspect-square grid grid-cols-11 border-[10px] bg-black border-yellow-400">
    {#each Array(grid.length) as _, i}
        {#each Array(grid[0].length) as __, j}
            <Cell 
                letter={grid[i][j]} 
                isRevealed={letters.list.includes(grid[i][j].value) && letters.displayed[grid[i][j].value]} 
                wordDiscovered={(grid[i][j].mots_associes[0]!==-1 && list.words[grid[i][j].mots_associes[0]].mot_valid)||(grid[i][j].mots_associes[1]!==-1 && list.words[grid[i][j].mots_associes[1]].mot_valid)}
            />
        {/each}
    {/each}

</div>

<script>
    import Cell from "./Cell.svelte";

    export let list;
    export let letters;
    let grid = list.letters;
</script>