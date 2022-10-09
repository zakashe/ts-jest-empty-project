export class LetterWarehouse {
    protected lettersMap: Map<string, number>;

    constructor(letters: string) {
        this.lettersMap = new Map<string, number>();

        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];
            this.changeLetterCount(letter, 1);
        }
    }

    public removeTheWordFromSet(word: string) {
        for (let i = 0; i < word.length; i++) {
            this.changeLetterCount(word[i], -1);
        }
    }

    public doesAWordExist(word: string) {
        for (let i = 0; i < word.length; i++) {
            if (!this.doesLetterExist(word[i]))
                return false;
        }
        return true;
    }

    public doesLetterExist(letter: string) {
        return this.lettersMap.has(letter) &&
            this.lettersMap.get(letter) > 0;
    }


    private changeLetterCount(letter: string, increment: number) {
        if (this.lettersMap.has(letter)) {
            this.lettersMap.set(letter, this.lettersMap.get(letter) + increment);
        } else
            this.lettersMap.set(letter, 1);
    }
}
