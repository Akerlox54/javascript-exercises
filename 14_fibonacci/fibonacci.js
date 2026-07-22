const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let result;
    let count;
    if (typeof num !== 'number') {
        count = parseInt(num);
    } else count = num;

    if ( count < 0) return 'OOPS';
    if (count === 0) return 0;
    if (count === 1 || count === 2 ) return 1;
    for (let i = 2; i <= num; i++) {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
