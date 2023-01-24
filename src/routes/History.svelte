<Navbar opacity={70}/>

<div class="flex flex-col items-center justify-center w-full h-full">
    <div class="z-10 flex flex-col items-center bg-white px-2 pt-2 rounded-md w-96 max-w-full">
        <h1 class="font-bold text-xl mb-4">Vos précédentes parties</h1>
        {#await gamesHistory()}
            loading...
        {:then games} 
            {#each games as game}
                <div class="flex flex-col w-full">
                    <GameHistoryItem game={game} />
                </div>
            {/each}
        {/await}
    </div>
</div>


<script>
    import Navbar from "../components/Navbar.svelte";
    import GameHistoryItem from "../components/GameHistoryItem.svelte";
    import { fetchURL } from "../api";
    

    async function gamesHistory() {
        let games = await fetchURL('GET', '/game/history');
        console.log(games)
        return games
    }
</script>