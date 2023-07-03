const Stack = require("./stack");

describe('My stack', () =>{

    let stack;

    beforeEach(() => {
        stack = new Stack();
    })


    it('is created empty', () => {

        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
        
    });

    it('can push to the top', () =>{
        stack.push('YesPapi');
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("YesPapi");

    });

    it('can pop off', () =>{
        stack.push('YesPapi');
        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.peek).toBe(undefined);
    });


})
