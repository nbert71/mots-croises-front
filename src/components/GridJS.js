export class GridJS{
    constructor(dimension){
        console.log("imported")
        this.lettres=Array(dimension)
        for(let i=0;i<dimension;i++){
            this.lettres=Array(dimension)
        }
        this.mots=[]
    }

    add_letters(letters){
        this.letters=letters;
    }
}