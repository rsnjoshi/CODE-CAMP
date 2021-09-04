// Mutation in arrays

const color = [
    {
        color: "blue",
        code: "rgb(0,0,255)",
        used: [1, 34, 56, 78],
    },
    {
        color: "red",
        code: "rgb(255,0,0)",
        used: [23, 34, 12, 1],
    },
];

//! Stoping mutation

// Hard way
let anotherArray = [];

for (let i = 0; i < color.length; i++) {
    anotherArray.push(color[i]);
}

// Spread operator
const duplicateArray = [...color];

console.log(anotherArray);
console.log(color);
