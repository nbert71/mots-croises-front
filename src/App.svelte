<Navbar />

<div class="flex w-3/4 mt-10">
    <div class="w-1/3 flex flex-col items-center">
        <MyLetters bind:letters={letters}/>
    </div>  
    <div class="w-2/3 flex flex-col items-center">
        <Grid {list} {letters}/>
    </div> 
</div>


<script>
    import Navbar from "./components/Navbar.svelte";
    import MyLetters from "./components/MyLetters.svelte";
    import Grid from "./components/Grid.svelte";

    let list = [
        "--CHIC--NEZ",
        "---O-APRE--",
        "--CUIR--T-E",
        "M--X-ARC--M",
        "A-M--T-A--E",
        "T-E--SAPHIR",
        "IODES--I--A",
        "N-I--U-TENU",
        "E-AGENDA--D",
        "E----I-L--E",
        "SOUDE------",
    ];

    //let letters_size = 14;
    let letters = {
        list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
        displayed:{
            A:false,
            B:false,
            C:false,
            D:false,
            E:false,
            F:false,
            G:false,
            H:false,
            I:false,
            J:false,
            K:false,
            L:false,
            M:false,
            N:false
        }
    }
    $: console.log(letters)
</script>