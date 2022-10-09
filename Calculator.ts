import {LetterWarehouse} from "./LetterWarehouse";

export class Calculator {
    private readonly words:string[];
    private readonly letters:LetterWarehouse;
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
        return Math.max(this.skipCurrentWord(index, letters),
            this.includeCurrentWord(index, letters));

    }

    private skipCurrentWord(index: number, letters: LetterWarehouse) {
        return this.countPossibleWords(index + 1, letters);
    }

    private includeCurrentWord(index: number, letters: LetterWarehouse) {
        const currentWord = this.words[index];
        if(!letters.doesWordExist(currentWord))
            return 0;

        return 1 + this.countPossibleWords(index + 1, letters.removeTheWordFromSet(currentWord))
    }
}
