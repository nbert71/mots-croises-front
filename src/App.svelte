<Navbar />

<div class="flex w-3/4 mt-10">
    <div class="w-1/3 flex flex-col items-center">
        <MyLetters letters_size={letters_size}/>
    </div>  
    <div class="w-2/3 flex flex-col items-center">
        <Grid />
    </div> 
</div>


<script>
    import Navbar from "./components/Navbar.svelte";
    import MyLetters from "./components/MyLetters.svelte";
    import Grid from "./components/Grid.svelte";

    let letters_size = 14;
</script>