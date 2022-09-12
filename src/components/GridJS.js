export class GridJS{
    constructor(letters){
        this.finded_words=0;
        this.words=[];
        this.n_x=letters.length;
        this.n_y=letters[0].length;
        this.letters=Array(this.n_x);
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
                        console.log(current_word)
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
                        console.log(current_word)
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
        }
    }

    discover_letter(letter){
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
    }
}