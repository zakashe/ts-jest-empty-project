export class Calculator {
    private letters:string;
    private words:string[];
    constructor(letters: string, words: string[]) {
        this.letters = letters;
        this.words = words;
    }

    public count(): number {
        return this.words.filter(word => this.doesWordExist(word)).length;
    }

    private doesWordExist(word : string) {
        for (let i = 0; i < word.length; i++) {
            if (this.letters.indexOf(word[i]) < 0)
                return  false;
        }
        return true;
    }
}
