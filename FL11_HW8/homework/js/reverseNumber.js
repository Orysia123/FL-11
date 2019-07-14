function reverseNumber(number) {
    let revNum = number.toString().split('').reverse().join('');
    return parseInt(revNum) * Math.sign(number);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);