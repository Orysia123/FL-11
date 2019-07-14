function isInteger(a) {
    return typeof a === 'number' && isFinite(a) &&
        Math.floor(a) === a;
}

isInteger(5);
isInteger(5.1);