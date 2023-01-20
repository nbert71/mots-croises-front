<Navbar />
<div class="grid place-items-center w-full h-full bg-gray-200">
    <div class="overflow-hidden bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6 text-center">
            <h1 class="font-bold text-2xl mb-2 text-center">Rechargez votre compte !</h1>
            <p class="italic text-gray-600">Votre solde actuel est de <span class="font-bold">{solde}€</span>.</p>

            <hr class="my-3">

            <div class="flex flex-col items-center">
                <p>Vous allez créditer <span class="font-bold">{refill}€</span>.</p>
                {#if refill < 0}
                <div class="flex flex-col text-xs mt-2 text-gray-500">
                    <span>Vous récupérez de l'argent de votre compte</span>
                    <span>pour l'offrir à la fondation Brucker.</span>
                </div>
                {/if}
                <div class="flex items-center justify-between w-full my-4">
                    <button on:click={() => updateRefill(-10)} class="rounded-full text-white w-12 h-12 inline-flex items-center justify-center font-bold cursor-pointer bg-red-500 hover:bg-red-700 active:bg-red-400">-10€</button>
                    <button on:click={() => updateRefill(-1)} class="rounded-full text-white w-9 h-9 inline-flex items-center justify-center font-bold cursor-pointer bg-red-500 hover:bg-red-700 active:bg-red-400">-1€</button>
                    <button on:click={() => updateRefill(1)} class="rounded-full text-white w-9 h-9 inline-flex items-center justify-center font-bold cursor-pointer bg-green-500 hover:bg-green-700 active:bg-green-400">+1€</button>
                    <button on:click={() => updateRefill(10)} class="rounded-full text-white w-12 h-12 inline-flex items-center justify-center font-bold cursor-pointer bg-green-500 hover:bg-green-700 active:bg-green-400">+10€</button>
                </div>
                <button on:click={() => crediter()} type="button" class="inline-flex items-center rounded-md border border-transparent bg-f-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-f-blue-700 active:bg-f-blue-500">Appliquer</button>
            </div>

        </div>
    </div>
</div>

<script>
import { fetchURL } from "./../api";
import Navbar from "../components/Navbar.svelte";
import { solde_store } from "./../store";

let solde;
let refill = 0;

const updateRefill = (value) => {
    refill += value;    
}

const crediter = () => {
    let data = { solde , refill };
    // maj du solde dans le back
    fetchURL('POST', '/user/refill', data)
    .then(res => {
        //maj du solde dans le front
        solde = res
        refill = 0
        solde_store.set(res)
    })
}

const getSolde = () => {
    fetchURL('GET', '/my')
    .then(res => solde = res.money)
}

getSolde()

</script>
