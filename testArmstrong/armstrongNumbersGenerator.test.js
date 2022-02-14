const obj = require('../armstrongNumbersGenerator');
describe('printArmstrong', function(){
    it('should print armstrong numbers from 1 to n', function(){
        const num = obj.printArmstrong(12);
        expect(num).toEqual([1,2,3,4,5,6,7,8,9]);
    })
    it('should give invalid input if number is negative', function(){
        const num = obj.printArmstrong(-1);
        expect(num).toEqual('invalid input');
    })
    it('should give invalid input if number is not a number', function(){
        const num = obj.printArmstrong("abcd");
        expect(num).toEqual('input is not a number');
    })
    it('should return invalid input if number exceeds the range', function(){
        const num = obj.printArmstrong(123456789);
        expect(num).toEqual('invalid input');
    })
})
describe('isArmstrong', function(){
    it('should give invalid input if number is not a number', function(){
        const num = obj.isArmstrong("abcd");
        expect(num).toEqual('input is not a number');
    })
    it('should return invalid input if number exceeds the range', function(){
        const num = obj.isArmstrong(123456789);
        expect(num).toEqual('invalid input');
    })
    it('should give invalid input if number is negative', function(){
        const num = obj.isArmstrong(-1);
        expect(num).toEqual('invalid input');
    })
    it('should return true if number is armstrong number', function(){
        const num = obj.isArmstrong(153);
        expect(num).toEqual(true);
    })
    it('should return false if number is not armstrong number', function(){
        const num = obj.isArmstrong(15);
        expect(num).toEqual(false);
    })
})