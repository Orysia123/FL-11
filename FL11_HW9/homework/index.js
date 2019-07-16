const two = 2;
const three = 3;
const five = 5;
const eight = 8;
const eighteen = 18;

let peoplesData = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }

];

// 0
function getNumbers(arr) {
    let str = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            arr.push(arr[i]);
        }
    }
    return str;
}

// 1
function findTypes(...arg) {
    let dataTypes;
    let obj = {};

    for (let i = 0; i < arg.length; i++) {
        dataTypes = typeof arg[i];
        if (typeof arg[i] === obj) {
            obj[dataTypes] += 1;
        } else {
            obj[dataTypes] = 1;
        }
    }
    return obj;
}

// 2
function executeforEach(arr, fnctn) {
    for (let i = 0; i < arr.length; i++) {
        fnctn(arr[i]);
    }
}
executeforEach([1, two, three], function(el) {
    console.log(el)
});

// 3
function mapArray(arr, fnctn) {
    let newArray = [];
    executeforEach(arr, (el) => {
        newArray.push(fnctn(el))
    });
    return newArray;
}

mapArray([two, five, eight], function(el) {
    return el + three
});

// 4
function filterArray(arr, fnctn) {
    let filtArray = [];
    executeforEach(arr, function(el) {
        if (fnctn(el)) {
            filtArray.push(el);
        }
    });
    return filtArray;
}
filterArray([two, five, eight], function(el) {
    return el > three;
});

// 5
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `Date: ${date.getDate()} of ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

// 6
function canConvertToDate(date) {
    const isConverted = date.toDateString();
    return isConverted;
}

// 7
const daysBetween = (newDate1, newDate2) => {

    let difference;
    const second = 1000;
    const minutes = 60;
    const hours = 60;
    const dayHour = 24;

    difference = (newDate2 - newDate1) / (second * minutes * hours * dayHour);

    return difference;
}


// 8
function getAmountOfAdultPeople(peoplesData) {
    return filterArray(peoplesData, function(el) {
        return el.age >= eighteen;
    }).length;
}

// 9
const keys = function(obj) {
    let array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(key);
        }
    }
    return array;
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 });

// 10
function values(obj) {
    let array = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            array.push(obj[key]);
        }
    }
    return array;
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });