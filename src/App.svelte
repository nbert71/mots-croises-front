<Router {routes} />

<script>
    import Router from 'svelte-spa-router'

    import Game from "./routes/Game.svelte";
    import Login from "./routes/Login.svelte";
    import NotFound from "./routes/NotFound.svelte";


    const routes = {
        '/': Game,
        '/login': Login,
        '*': NotFound
    }

</script>