<div aria-hidden="true" class="absolute inset-0 overflow-hidden -z-10">
    <img src="wallpaper.jpg" alt="" class="h-full w-full object-cover object-center">
    <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-70"></div>
</div>

<Navbar opacity={70}/>

<div class="flex justify-evenly items-center w-full h-full my-10">
    <MyLetters bind:letters={letters} bind:list={list}/>
    <Grid {list} {letters}/>
    <Gains {finded}/>
</div>


<script>
    import Navbar from "../components/Navbar.svelte";
    import MyLetters from "../components/MyLetters.svelte";
    import Grid from "../components/Grid.svelte";
    import Gains from "../components/Gains.svelte";
    import {GridJS} from "../components/GridJS.js";

    let list = new GridJS([
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
    ])
    list.find_words()

    $: finded = list.finded_words

    let letters = list.generate_my_letters()

    //let letters_size = 14;
    // let letters = {
    //     list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
    //     displayed:{
    //         A:false,
    //         B:false,
    //         C:false,
    //         D:false,
    //         E:false,
    //         F:false,
    //         G:false,
    //         H:false,
    //         I:false,
    //         J:false,
    //         K:false,
    //         L:false,
    //         M:false,
    //         N:false
    //     }
    // }
</script>