<!-- <nav class="w-full h-16 bg-gray-300 shadow-md flex justify-between items-center mb-4 px-8">
    <div class="flex items-center">
        <span class="text-xl mr-16">Jeux de mots croisés</span>
        <ul class="nav flex justify-between gap-8">
            <a href="/" use:active={'/'} use:link={{href: '/', disabled: false}}>Home</a>
            <a href="/" use:active={'/help'} use:link={{href: '/help', disabled: false}}>Aide</a>
            <a href="/" use:active={'/refill'} use:link={{href: '/refill', disabled: false}}>Rechargement</a>

        </ul>
    </div>
    <div class="">
        <span class="bg-gray-500 text-white px-3 py-2 rounded-full">
            110 €
        </span>
    </div>
</nav>-->

<header class="bg-f-blue-800">
    <nav class="mx-auto w-screen px-6 lg:px-8" aria-label="Top">
        <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div class="flex items-center">
                <a href="#">
                    <span class="sr-only">Your Company</span>
                    <img class="h-10 w-auto" src="coin.png" alt="">
                </a>
                <div class="ml-10 hidden space-x-8 lg:block">
                    <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                        use:active={'/'} use:link={{href: '/', disabled: false}}>
                        Home
                    </a>

                    <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                        use:active={'/help'} use:link={{href: '/help', disabled: false}}>
                        Aide
                    </a>

                    <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                        use:active={'/refill'} use:link={{href: '/refill', disabled: false}}>
                        Rechargement
                    </a>

                </div>
            </div>
            <div class="ml-10 space-x-4">
                <span class="inline-block rounded-md border border-transparent bg-f-blue-500 shadow-lg shadow-f-blue-300/30 py-2 px-4 text-base font-medium text-white">110 €</span>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
            <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                use:active={'/'} use:link={{href: '/', disabled: false}}>
                Home
            </a>

            <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                use:active={'/help'} use:link={{href: '/help', disabled: false}}>
                Aide
            </a>

            <a href="/" class="text-base font-medium text-white hover:text-indigo-50 p-2 rounded-md"
                use:active={'/refill'} use:link={{href: '/refill', disabled: false}}>
                Rechargement
            </a>
        </div>
    </nav>
</header>

<script>
import active from 'svelte-spa-router/active';
import {
  link
} from 'svelte-spa-router';
</script>
