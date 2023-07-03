const odinTest = require('./odin');
const stringFristCharFunction = odinTest.stringFunction;
const stringReverseFunction = odinTest.stringReverse;
const stringCeaser = odinTest.ceaserCipher;
const calculatorClass = odinTest.Calculator;



describe('String operations', () =>{
    it('First letter is capitalized', () => {
        expect(stringFristCharFunction().charAt(0)).toBe("Y");
    })

    it('It reverse string', () => {
        expect(stringReverseFunction("YesPapi")).toBe("ipaPseY");
    });

    it('Ceaser cipher normal', () => {
        expect(stringCeaser("YesPapi.", 2)).toBe("AguRcrk.");
        expect(stringCeaser("YesPapi.", 5)).toBe("DjxUfun.");
    });

    it('Ceaser cipher wrong values', () => {
        expect(stringCeaser("YesPapi.", -5)).toBe("Shift value must be between 0 and 26");
        expect(stringCeaser("YesPapi.", 28)).toBe("Shift value must be between 0 and 26");
    });

})

describe('Int operatons', () =>{
    const Calculator = new calculatorClass;

    it('Can add', () => {
        expect(Calculator.add(2,5)).toBe(7);
        expect(Calculator.add(-2,1)).toBe(-1);
    });
    it('Can subtract', () =>{
        expect(Calculator.subtract(6,1)).toBe(5);
        expect(Calculator.subtract(-2,1)).toBe(-3);
    });
    it('Can divide', () =>{
        expect(Calculator.divide(6,2)).toBe(3);
        expect(Calculator.divide(2,0)).toBe(Infinity);
    });

    it('Can multiply', () =>{
        expect(Calculator.multiply(2,4)).toBe(8);
        expect(Calculator.multiply(2,0)).toBe(0);
    });
})

