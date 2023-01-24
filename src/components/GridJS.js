export class GridJS{
    constructor(letters, callBackEnd){
        this.finded_words=0;
        this.words=[];
        this.n_x=letters.length;
        this.n_y=letters[0].length;
        this.letters=Array(this.n_x);
        this.callBack = callBackEnd;
        this.discoveredLetters = [];
        for(let i=0;i<this.n_x;i++){
            this.letters[i]=Array(this.n_y);
            for(let j=0;j<this.n_y;j++){
                this.letters[i][j]={
                    value:letters[i][j],
                    mots_associes:[-1,-1]//first value vertical & 2nd value horizontal
                }
            }
        }
    }

    extract_letters(word){
        let letters_list=[];
        for(let char of word){
            if (!letters_list.includes(char)){
                letters_list.push(char);
            }
        }
        return letters_list;
    }

    get_all_letters(){
        let letters_list = [];
        for (let i = 0; i < this.n_x; i++) {
            for (let j = 0; j < this.n_y; j++) {
                let current_letter = this.letters[i][j].value;
                if(!letters_list.includes(current_letter) && current_letter !== "-"){
                    letters_list.push(current_letter)
                }
            }
        }
        return letters_list;
    }

    isVowel(char){
        return ['a', 'e', 'i', 'o', 'u', 'y'].indexOf(char.toLowerCase()) !== -1
    }

    shuffleArray(arr) {
        return arr.sort((a, b) => 0.5 - Math.random())
    }

    generate_my_letters(){
        let my_letters = {
            list: [],
            displayed: {}
        };    // Mon jeu de 14 lettres

        let letters_bag = this.get_all_letters();   // on a toutes les lettres de la grille
        
        let vowels_bag = letters_bag.filter(char => this.isVowel(char));  // toutes les voyellzs de la grille
        let consouns_bag = letters_bag.filter(char => !this.isVowel(char));   // idem pour les consonnes

        //On sélectionne max 4 voyelles random, ou moins si la grille en comporte moins
        if(vowels_bag.length < 4) {
            vowels_bag.map(vowel => {
                my_letters.list.push(vowel);
                my_letters.displayed[vowel] = false
            })
                
        } else {
            let shuffled_vowels = this.shuffleArray(vowels_bag); // on shuffle les voyelles
            let choosen_vowels = shuffled_vowels.slice(0, 4)    // on prend les 4 premières
            choosen_vowels.map(vowel => {
                my_letters.list.push(vowel);
                my_letters.displayed[vowel] = false
            })
        }

        let consouns_number = 14 - my_letters.list.length    // TODO mettre le 14 en paramètre du constructeur
        let shuffled_consouns = this.shuffleArray(consouns_bag);
        

        for (let i = 0; i < consouns_number; i++) {
            my_letters.list.push(shuffled_consouns[i]);
            my_letters.displayed[shuffled_consouns[i]] = false
        }
        
        // on mé lange les lettres on sait jamais        
        let shuffled_letters = this.shuffleArray(my_letters.list)
        my_letters.list = shuffled_letters

        return my_letters
    }

    find_words(){
        let index=0
        for(let x=0;x<this.n_x;x++){
            let current_word="";
            let begin=-1;
            for(let y=0;y<this.n_y;y++){
                if(this.letters[x][y].value!=="-"){
                    if(current_word===""){
                        begin=y
                    }
                    current_word+=this.letters[x][y].value
                }else if(current_word!==""){
                    let length=y-begin
                    if(length!==1){
                        let letters_list= this.extract_letters(current_word)
                        this.words.push({
                            mot:current_word,
                            lettre_reste_a_trouver:letters_list,
                            mot_valid:false,
                            position:{
                                debut_x:x,
                                debut_y:begin,
                                orientation:false,//true -> vertical & false -> horizontal
                                number_letters:current_word.length
                            }
                        })
                        for(let y_bis=begin;y_bis<y;y_bis++){
                            this.letters[x][y_bis].mots_associes[0]=index//first value horizontal & 2nd value vertical
                        }
                        index+=1
                    }
                    current_word=""
                }
            }
            if(current_word!==""){
                let length=this.n_y-begin
                if(length!==1){
                    let letters_list= this.extract_letters(current_word)
                    this.words.push({
                        mot:current_word,
                        lettre_reste_a_trouver:letters_list,
                        mot_valid:false,
                        position:{
                            debut_x:x,
                            debut_y:begin,
                            orientation:false,//true -> vertical & false -> horizontal
                            number_letters:current_word.length
                        }
                    })
                    for(let y_bis=begin;y_bis<this.n_y;y_bis++){
                        this.letters[x][y_bis].mots_associes[0]=index//first value horizontal & 2nd value vertical
                    }
                    index+=1
                }
            }
        }
        for(let y=0;y<this.n_y;y++){
            let current_word="";
            let begin=-1;
            for(let x=0;x<this.n_x;x++){
                if(this.letters[x][y].value!=="-"){
                    if(current_word===""){
                        begin=x
                    }
                    current_word+=this.letters[x][y].value
                }else if(current_word!==""){
                    let length=x-begin
                    if(length!==1){
                        let letters_list= this.extract_letters(current_word)
                        this.words.push({
                            mot:current_word,
                            lettre_reste_a_trouver:letters_list,
                            mot_valid:false,
                            position:{
                                debut_x:begin,
                                debut_y:y,
                                orientation:true,//true -> vertical & false -> horizontal
                                number_letters:current_word.length
                            }
                        })
                        for(let x_bis=begin;x_bis<x;x_bis++){
                            this.letters[x_bis][y].mots_associes[1]=index //first value horizontal & 2nd value vertical
                        }
                        index+=1
                    }
                    current_word=""
                }
            }
            if(current_word!==""){
                let length=this.n_x-begin
                if(length!==1){
                    let letters_list= this.extract_letters(current_word)
                    this.words.push({
                        mot:current_word,
                        lettre_reste_a_trouver:letters_list,
                        mot_valid:false,
                        position:{
                            debut_y:y,
                            debut_x:begin,
                            orientation:false,//true -> vertical & false -> horizontal
                            number_letters:current_word.length
                        }
                    })
                    for(let x_bis=begin;x_bis<this.n_x;x_bis++){
                        this.letters[x_bis][y].mots_associes[1]=index//first value horizontal & 2nd value vertical
                    }
                    index+=1
                }
            }
        }
    }

    discover_letter(letter){
        if(!this.discoveredLetters.includes(letter)){
            this.discoveredLetters.push(letter)
        }
        for(let i=0;i<this.words.length;i++){
            let index=this.words[i].lettre_reste_a_trouver.indexOf(letter)
            if (index!==-1){
                this.words[i].lettre_reste_a_trouver.splice(index,1)
                if (this.words[i].lettre_reste_a_trouver.length===0){
                    this.words[i].mot_valid=true;
                }
            }
        }
        let number=0
        for (let i=0;i<this.words.length;i++){
            if(this.words[i].mot_valid)
            number+=1;
        }
        this.finded_words=number;

        if(this.discoveredLetters.length>=14){
            this.callBack()
            this.callBack = ()=>{}
        }
    }
}