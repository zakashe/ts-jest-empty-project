import {LetterWarehouse} from "./LetterWarehouse";

export class Calculator {
    private words:string[];
    private letters:LetterWarehouse;
    constructor(letters: string, words: string[]) {
        this.words = words;
        this.letters = new LetterWarehouse(letters);
    }

    public count(): number {
        return this.words.filter(word => this.shouldWordBeCounted(word)).length;
    }

    private shouldWordBeCounted(word : string) {
        if (this.letters.doesAWordExist(word)){
            this.letters = this.letters.removeTheWordFromSet(word);
            return true;

        }
        return false;
    }
}
