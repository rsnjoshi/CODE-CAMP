//A U B and A intersection B

const A = [1, 6, 8, 9, 2, 4];
const B = [1, 6, 10, 0, 5, 4, 67];

function inter(A, B) {
    const inter = [];
    for (let i = 0; i < A.length; i += 1) {
        for (let j = 0; j < B.length; j += 1) {
            if (A[i] == B[j]) {
                inter.push(A[i]);
            }
        }
    }
    return inter;
}

function union(item1, item2) {
    const output_array = [...item1];
    item2.forEach(element => {
        if (output_array.indexOf(element) === -1) output_array.push(element)
    });
    return output_array;
};

// let union = A.concat(B);
console.log(union(A, B));


console.log(inter(A, B));
// console.log(union(A, B));
