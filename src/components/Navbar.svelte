<nav class="w-full h-16 bg-gray-300 shadow-md flex justify-between items-center mb-4 px-8">
    <div class="flex items-center">
        <span class="text-xl mr-16">Jeux de mots croisés</span>
        <ul class="nav flex justify-between gap-8">
            <a href="/" use:active={'/'} use:link={{href: '/', disabled: false}}>Home</a>
            <a href="/" use:active={'/help'} use:link={{href: '/help', disabled: false}}>Help</a>

        </ul>
    </div>
    <div class="">
        <span class="bg-gray-500 text-white px-3 py-2 rounded-full">
            110 €
        </span>
    </div>
</nav>

<script>
    import active from 'svelte-spa-router/active';
    import {link} from 'svelte-spa-router';

    
</script>
