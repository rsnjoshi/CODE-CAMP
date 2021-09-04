// //This will take the given string and reverse
// string = "hello i am a programming language";
// console.log(string);

// function reverseSrting(string) {
//     let temp, revStr = "";
//     for (let i = str.length - 1; i >= 0; i -= 1) {
//         revStr += str[i];
//     }
//     return revStr;
// }

// console.log(reverseSrting(string));
// // console.log(reverseSrting(reverseSrting(string)));

//sorting an array

arrayToBeSorted = [4, 3, 6, 2, 7, 9, 3, 2, 10, 199, 1000, 12, 45, 76, 24];

function arraySort(array) {
    let sortedArray = array;
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray;
}
// console.log(arrayToBeSorted);
// console.log(arraySort(arrayToBeSorted));


//duplicate elements in array
let arrayToBeChecked = [1, 2, 3, 4, 4, 3, 3, 1, 1, 1, 7, 2, 4, 2, 1, 7, 20, 22, 22, 10];
sorted = arraySort(arrayToBeChecked);

function findDuplicates(array) {
    let resultantArray = [];
    let largestNum = array[array.length - 1];
    for(let i = 0; i < largestNum; i += 1) {
        resultantArray[i] = 0;
    }
    for( let i = 0; i < array.length; i += 1) {
        resultantArray[array[i]] += 1;
    }
    return resultantArray;
}
// [ 0, 5, 3, 3, 3, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0 ]

// console.log(findDuplicates(sorted));
printArray(arrayToBeChecked);
function printArray(array) {
    let resultantArray = findDuplicates(array);
    for(let i = 0; i < resultantArray.length; i += 1) {
        if (resultantArray[i] > 0) {
            console.log(i, "=>", resultantArray[i]);
        }
    }
}


console.log("");




// function findDuplicates(array) {
//     let sorted = arraySort(array);
//     let group = 0, number;
//     let returnArr;
//     for (let i = 0; i < sorted.length; i += 1) {
//         if (sorted[i] == sorted[i + 1]) {
//             // group++;
//             // returnArr[number] = group;

//         } else {
//             number++;
//         }
//     }
//     return returnArr;
// }

// function findDuplicates(array) {
//     arr = [];
//     for (let i = 0; i < array.length; i += 1) {
//         for (let j = 0; j < array.length; j += 1) {
//             if (array[i] == array[j]) {

//             }
//         }
//     }
// }



//Need to fix this

// function findDuplicates(array) {
//     let sorted = arraySort(array);
//     let dup = [];
//     // let count;
//     let bool = true;
//     for (let i = 0; i < sorted.length; i += 1) {
//         if (sorted[i] == sorted[i + 1]) {
//             if (bool) dup.push(sorted[i]);
//             if (dup.pop() != sorted[i]) dup.push(sorted[i]);
//             bool = false;
//         } else {
//             bool = true;
//             dup.push(sorted[i])
//         }
//     }
//     return dup;
// }
// console.log(findDuplicates(arrayToBeChecked));




// console.log(arrayToBeChecked);

// console.log(findDuplicates(arrayToBeChecked));

// function findDuplicates(item) {
//     const registry_array = []
//     const output_array = []
//     item.forEach((element, index) => {
//         if (registry_array.indexOf(element) === -1) {
//             registry_array.push(element)
//             let count = 1
//             for(let i = index + 1; i < item.length; i++) {
//                 if (item[i] === element) count += 1
//             }
//             output_array.push(element + '=>' + count)
//         }
//     })
//     return output_array.join(' ')
// }