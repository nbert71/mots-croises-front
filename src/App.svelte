{#await isAuthenticate()}
    loading...
{:then routes}
    <Router {routes} />
{/await}

<script>
    import Router from 'svelte-spa-router'
    import {fetchStatus} from "./api";

    import Game from "./routes/Game.svelte";
    import Help from './routes/Help.svelte';
    import Home from './routes/Home.svelte';
    import Login from "./routes/Login.svelte";
    import NotFound from "./routes/NotFound.svelte";
    import Register from './routes/Register.svelte';
    import Refill from "./routes/Refill.svelte";
    import History from './routes/History.svelte';


    const routes_registered = {
        '/': Home,
        '/game': Game,
        '/refill': Refill,
        '/history': History,
        '/login': Home,
        '/register': Home,
        '/help': Help,
        '*': NotFound
    }

    const routes_unregistered = {
        '/': Login,
        '/game': Login,
        '/login': Login,
        '/refill': Login,
        '/history': Login,
        '/register': Register,
        '/help': Help,
        '*': NotFound
    }

    async function isAuthenticate(){
        let routes = routes_registered
        const status = await fetchStatus('GET', '/')
        if(status==200){
            routes = routes_registered
        }else{
            routes = routes_unregistered
        }
        // console.log(typeof(status))
        return routes
    }

</script>