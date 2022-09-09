<Navbar />

<MyLetters letters_size={letters_size}/>

<script>
    import Navbar from "./components/Navbar.svelte";
    import MyLetters from "./components/MyLetters.svelte";

    let letters_size = 14;
</script>