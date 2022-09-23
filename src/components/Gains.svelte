<div class="w-1/4 bg-amber-100 h-min">
    <h2 class="text-center text-4xl py-5 bg-amber-300">Tableau des gains</h2>
    <div class="relative h-full">
        <p class="text-6xl echelon" class:current={finded == 9}>9 mots : <span class="money">40 000€</span></p>
        <p class="text-5xl echelon" class:current={finded == 8}>8 mots : <span class="money">1 000€</span></p>
        <p class="text-5xl echelon" class:current={finded == 7}>7 mots : <span class="money">500€</span></p>
        <p class="text-4xl echelon" class:current={finded == 6}>6 mots : <span class="money">100€</span></p>
        <p class="text-4xl echelon" class:current={finded == 5}>5 mots : <span class="money">30€</span></p>
        <p class="text-3xl echelon" class:current={finded == 4}>4 mots : <span class="money">15€</span></p>
        <p class="text-3xl echelon" class:current={finded == 3}>3 mots : <span class="money">6€</span></p>
        <p class="text-2xl echelon" class:current={finded == 2}>2 mots : <span class="money">3€</span></p>
        <p class="text-2xl echelon" class:current={finded == 1}>1 mot : <span class="money">0€</span></p>
        <p class="text-2xl echelon" class:current={finded == 0}>0 mot : <span class="money">0€</span></p>
        <!-- <div class="absolute z-10 top-0 bottom-[30%] couleur-cache w-full"></div>
        <div class="absolute z-10 bottom-[75%] top-[70%] w-full"></div>
        <div class="absolute z-10 bottom-0 top-[75%] couleur-cache w-full"></div> -->
    </div>
</div>

<script>
    export let finded;
</script>

<style>
    .money { @apply inline font-black text-amber-600;}
    .echelon { @apply text-center py-2;}

    .current { @apply bg-amber-300 transition-all duration-500;}
    /* .current>.money{ @apply text-white;} */

    .couleur-cache{
        background-color: rgba(250,204,21,0.8);
    }

</style>