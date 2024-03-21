const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
const filteredArrays = [];

for(let i = 0; i < numbers.length; i++) {
    const newArray = numbers[i].filter(el => el % 2 === 0);
    filteredArrays.push(newArray);
}

console.log(filteredArrays);