<Router {routes} />

<script>
    import Router from 'svelte-spa-router'

    import Game from "./routes/Game.svelte";
    import Help from './routes/Help.svelte';
    import Login from "./routes/Login.svelte";
    import NotFound from "./routes/NotFound.svelte";
    import Register from './routes/Register.svelte';


    const routes = {
        '/': Game,
        '/login': Login,
        '/register': Register,
        '/help': Help,
        '*': NotFound
    }

</script>