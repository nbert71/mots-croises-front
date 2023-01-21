<script>
  export let game;
</script>

<div class="bg-gray-300 flex items-center justify-between w-full mb-4 px-2 py-1 rounded-md hover:shadow-md">
  <span class="font-bold">Grille n°: {game.id}</span> 
  <span>
    {#if game.isFinished}
      <i class="fa-solid fa-check text-green-500"></i>
    {:else}
      <i class="fa-regular fa-clock"></i>
    {/if}
  </span>
</div>

