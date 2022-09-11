export class GridJS{
    constructor(){
        console.log("imported")
        this.words=[];
        this.letters;
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

    add_words(words){
        for(let word of words){
            let letters_list= this.extract_letters(word)
            this.words.push({
                mot:word,
                lettre_reste_a_trouver:letters_list,
                mot_valid:false,
                position:{
                    debut_x:-1,
                    debut_y:-1,
                    orientation:false,//true -> vertical & false -> horizontal
                    number_letters:word.length
                }
            })
        }
    }

    add_letters(letters){
        let n_x=letters.length;
        let n_y=letters[0].length;
        this.letters=Array(n_x);
        for(let i=0;i<n_x;i++){
            this.letters[i]=Array(n_y);
            for(let j=0;j<n_y;j++){
                this.letters[i][j]={
                    value:letters[i][j],
                    mots_associes:[-1,-1]
                }
            }
        }
    }
}