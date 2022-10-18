<Navbar />

<div class="flex w-full px-36">
    <div class="w-1/2 flex flex-col items-center">
        <h1 class="font-bold text-xl mb-8">Les jeux disponibles !</h1>
        <span on:click={newGame} type="button" class="bg-amber-400 hover:bg-amber-600 cursor-pointer w-36 px-4 py-1 inline-grid place-items-center rounded-md">
            Jouer
        </span>
    </div>
    <div class="w-1/2">
        <h1 class="font-bold text-xl mb-8">Vos précédentes parties</h1>
    </div>
</div>


<script>
    import Navbar from "./../components/Navbar.svelte";

    function newGame(){
        // jouer la partie dans le back
        // update le solde dans la navbar
        //rediriger vers la page de game
    }

</script>