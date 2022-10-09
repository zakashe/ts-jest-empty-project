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

    test('single string, same letters different order', ()=>{
        const calculator = new Calculator('gdo', ['dog']);
        expect(calculator.count()).toBe(1);
    })

    // test('two string, same letters different order', ()=>{
    //     const calculator = new Calculator('gdotac', ['dog', 'cat']);
    //     expect(calculator.count()).toBe(2);
    // })


    test('two string, non-exclusive letters different order', ()=>{
        const calculator = new Calculator('gdohme', ['dog', 'home']);
        expect(calculator.count()).toBe(1);
    })

    test('many string, non-exclusive letters maximizing count', ()=>{
        const calculator = new Calculator('gdohmeo', ['oo','gh','dog', 'home']);
        expect(calculator.count()).toBe(2);
    })
})
