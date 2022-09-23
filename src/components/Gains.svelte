<div class="w-1/4 bg-amber-100 h-min">
    <h2 class="text-center text-4xl py-5 bg-amber-300">Tableau des gains</h2>
    <div class="relative h-full"> 
        <div class="gain">
            <p>9 mots : <span class="money">40 000€</span></p>
        </div>
        <div class="gain">
            <p>8 mots : <span class="money">1 000€</span></p>
        </div>
        <div class="gain">
            <p>7 mots : <span class="money">5000€</span></p>
        </div>
        <div class="gain">
            <p>6 mots : <span class="money">100€</span></p>
        </div>
        <div class="gain">
            <p>5 mots : <span class="money">30€</span></p>
        </div>
        <div class="gain">
            <p>4 mots : <span class="money">15€</span></p>
        </div>
        <div class="gain">
            <p>3 mots : <span class="money">6€</span></p>
        </div>
        <div class="gain">
            <p>2 mots : <span class="money">3€</span></p>
        </div>
        <div class="gain">
            <p>1 mot : <span class="money">0€</span></p>
        </div>
        <div class="gain">
            <p>0 mot : <span class="money">0€</span></p>
        </div>

        <div class="cover top-0 top-cover" style="--top-height: {topHeight}"></div>
        <div class="cover bottom-0 bottom-cover" style="--bottom-height: {bottomHeight}"></div>
    </div>
</div>

<script>
    export let finded;

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };

    // finded varie de 0 à 9 (les cas ou on a 10 ou 11 mots sont à traiter)
    //il y a donc 10 gains possibles
    // ex: finded = 2 --> div du haut = 70% // div du bas = 20%
    // la somme doit toujours faire 90%, on laisse 10% pour afficher le gain en cours
    $: topHeight = scale(finded, 0, 9, 90, 0)+'%';
    $: bottomHeight = scale(finded, 0, 9, 0, 90)+'%';
</script>

<style>
    .gain { @apply h-12 bg-yellow-100 flex items-center justify-center text-2xl;}
    .money { @apply inline font-black text-amber-600;}

    .cover { @apply absolute z-10 bg-yellow-300/[0.6] w-full transition-all duration-1000;}
    .top-cover {
        height: var(--top-height);
    }
    .bottom-cover {
        height: var(--bottom-height);
    }

</style>