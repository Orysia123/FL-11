function pipe(number) {
    let sum = number;
    for (let i = 1; i < arguments.length; i++) {
        sum = arguments[i](number);
    }
    return sum;
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);