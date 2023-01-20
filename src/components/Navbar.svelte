<header class="bg-f-blue-800">
    <nav class="mx-auto w-screen px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between border-b border-indigo-500 py-4 lg:border-none">
            <div class="flex items-center">
                <a href="/">
                    <img class="h-10 w-auto" src="coin.png" alt="">
                </a>
                <div class="ml-10 hidden space-x-8 lg:block">
                    <a href="/" use:active={'/'} use:link={{href: '/', disabled: false}}>
                        Home
                    </a>

                    <a href="/" use:active={'/help'} use:link={{href: '/help', disabled: false}}>
                        Aide
                    </a>

                    <a href="/" use:active={'/refill'} use:link={{href: '/refill', disabled: false}}>
                        Rechargement
                    </a>

                </div>
            </div>
            <div class="ml-10 space-x-4">
                <span class="inline-block rounded-md border border-transparent bg-f-blue-500 shadow-lg shadow-f-blue-300/30 py-2 px-4 text-base font-medium text-white">{solde} €</span>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            <a href="/" use:active={'/'} use:link={{href: '/', disabled: false}}>
                Home
            </a>

            <a href="/" use:active={'/help'} use:link={{href: '/help', disabled: false}}>
                Aide
            </a>

            <a href="/" use:active={'/refill'} use:link={{href: '/refill', disabled: false}}>
                Rechargement
            </a>
        </div>
    </nav>
</header>

<script>
import active from 'svelte-spa-router/active';
import { link } from 'svelte-spa-router';
import { fetchURL } from './../api/index'

let solde;

const getSolde = () => {
    fetchURL('GET', '/my')
    .then(res => solde = res.money)
}
getSolde()

</script>
