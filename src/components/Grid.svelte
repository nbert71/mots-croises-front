<div class="h-10 my-2 font-bold text-yellow-500">
    {#if find > 0}
        {find} mots trouvés !
    {:else}
         
    {/if}
</div>

<div class="h-full aspect-square bg-black grid grid-cols-{grid_size}">
</div>

<script>
    let find = 2;
    let grid_size = 11;
</script>