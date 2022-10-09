import {LetterWarehouse} from "./LetterWarehouse";

export class Calculator {
    private words:string[];
    private letters:LetterWarehouse;
    constructor(letters: string, words: string[]) {
        this.words = words;
        this.letters = new LetterWarehouse(letters);
    }

    public count(): number {
        return this.countPossibleWords(0, this.letters);
    }

    private countPossibleWords(index:number, letters:LetterWarehouse){
        if(index >= this.words.length)
            return 0;
        let currentWord = this.words[index];
        if(letters.doesAWordExist(currentWord))
            return 1 + this.countPossibleWords(index+1, letters.removeTheWordFromSet(currentWord))
        else
            return this.countPossibleWords(index+1, letters);

    }
}
