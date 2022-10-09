import {Calculator} from "./Calculator";

describe('bowling', ()=>{
    test('single string, same letters and order', ()=>{
        const calculator = new Calculator('dog', ['dog']);
        expect(calculator.count()).toBe(1);
    })

    test('two string, different letters', ()=>{
        const calculator = new Calculator('dogcat', ['dog','cat']);
        expect(calculator.count()).toBe(2);
    })

})
