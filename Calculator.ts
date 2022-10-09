export class Calculator {
    private letters:string;
    private words:string[];
    private lettersMap:Map<string, number>;
    constructor(letters: string, words: string[]) {
        this.letters = letters;
        this.words = words;

        this.initializeLettersSet(letters);
    }

    private initializeLettersSet(letters: string) {
        this.lettersMap = new Map<string, number>();

        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];
            this.changeLetterCount(letter);
        }
    }

    private changeLetterCount(letter: string, increment:number = 1) {
        if (this.lettersMap.has(letter)) {
            this.lettersMap.set(letter, this.lettersMap.get(letter) + increment);
        }
        else
            this.lettersMap.set(letter, 1);
    }

    public count(): number {
        return this.words.filter(word => this.shouldWordBeCounted(word)).length;
    }

    private shouldWordBeCounted(word : string) {
        if (this.doesAWordExist(word)){
            this.removeTheWordFromSet(word);
            return true;

        }
        return false;
    }

    private removeTheWordFromSet(word: string) {
        for (let i = 0; i < word.length; i++) {
            this.changeLetterCount(word[i], -1);
        }
    }

    private doesAWordExist(word: string) {
        for (let i = 0; i < word.length; i++) {
            if (!this.doesLetterExist(word[i]))
                return false;
        }
        return true;
    }

    private doesLetterExist(letter: string) {
        return this.lettersMap.has(letter) &&
            this.lettersMap.get(letter) > 0;
    }
}
