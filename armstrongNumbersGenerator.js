
function isArmstrong(number)
{
    if(typeof(number) !== "number" ){
        return "input is not a number";
    }
    if(number <= 0){
        return "invalid input";
    }
    if(number > 43211)
    {
        return "invalid input";
    }
    let temp = number;
    let sum = 0;
    let lastDigit;
    let power = number.toString().length;
    while(temp > 0)
    {
        lastDigit = temp % 10;
        sum += lastDigit ** power;
        temp = Math.floor(temp / 10);
    }

    return (sum === number);
}

function printArmstrong(range)
{
    if(typeof(range) !== "number" ){
        return "input is not a number";
    }
    if(range <= 0){
        return "invalid input";
    }
    if(range > 43211)
    {
        return "invalid input";
    }
    let armstrongArray=[];
    for(let index = 1 ; index <= range; index++)
    {
        if(isArmstrong(index))
        {
            armstrongArray.push(index);
        }
    }
    return armstrongArray;
}


module.exports={
    printArmstrong,
    isArmstrong
};

