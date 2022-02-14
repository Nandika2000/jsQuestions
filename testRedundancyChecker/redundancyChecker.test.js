const check = require('../redundancyChecker');
describe('checkRepeatingWords ', function(){
    it('should give invalid input if sentence is not a string',function(){
        const sent = check(123," ");
        expect(sent).toBe("invalid input");
    })
    it('should return false if there are no repeated words in sentence', function(){
        const sent = check("hello McKinsey" ," ");
        expect(sent).toEqual(false);
    })
    it('should return true if there are repeated words in sentence', function(){
        const sent = check("hello McKinsey hello" ," ");
        expect(sent).toEqual(true);
    })
    it('should return invalid input if length of sentence is greater than limit', function(){
        const sent = check("hello McKinsey hello hello McKinsey hello hello McKinsey hello hello McKinsey hello hello McKinsey hello hello McKinsey hellohello McKinsey hello v " ," ");
        expect(sent).toEqual("invalid input");
    })
    it('should return true if there are repeated words in sentence in different cases', function(){
        const sent = check("hello McKinsey HELLO" ," ");
        expect(sent).toEqual(true);
    })

})