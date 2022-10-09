export class Calculator {
    private letters:string;
    private strings:string[];
    constructor(letters: string, strings: string[]) {
        this.letters = letters;
        this.strings = strings;
    }

    public count(): number {
        return this.strings.filter(s => this.letters.indexOf(s)>-1).length;
    }

}
