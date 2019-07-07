let a = +prompt('Please enter the length of side 1');
let b = +prompt('Please enter the length of side 2');
let c = +prompt('Please enter the length of side 3');


if (a + b > c && b + c > a && c + a > b) {
    if (a === b && a === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}