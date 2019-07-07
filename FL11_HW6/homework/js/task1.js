let a1 = +prompt('Please enter x-coordinate of point A');
let a2 = +prompt('Please enter y-coordinate of point A');
let b1 = +prompt('Please enter x-coordinate of point B');
let b2 = +prompt('Please enter y-coordinate of point B');
let c1 = +prompt('Please enter x-coordinate of point C');
let c2 = +prompt('Please enter y-coordinate of point C');

const halfDivisor = 2;

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c2)) {
    console.log('Please enter a number');
}

if ((a1 + b1) / halfDivisor === c1 && (a1 + b1) / halfDivisor === c2) {
    console.log(true);
} else {
    console.log(false);
}