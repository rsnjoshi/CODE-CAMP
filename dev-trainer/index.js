// javascript assignment for array

function reverse(item) {
    const new_array = item.split('')
    new_array.reverse()
    return new_array.join('')
}

function findDuplicates(item) {
    const registry_array = []
    const output_array = []
    item.forEach((element, index) => {
        if (registry_array.indexOf(element) === -1) {
            registry_array.push(element)
            let count = 1
            for(let i = index + 1; i < item.length; i++) {
                if (item[i] === element) count += 1
            }
            output_array.push(element + '=>' + count)
        }
    })
    return output_array.join(' ')
}

function arraySort(item) {
    const array_length = item.length
    let completeFlag = true
    item.forEach((element, index) => {
        if (index < array_length - 1) {
            const neighbour = item[index + 1]
            const diff = element - neighbour
            if (diff > 0) {
                item[index + 1] = item[index]
                item[index] = neighbour
                completeFlag = false
            } 
        }
    })
    if (!completeFlag) return arraySort(item)
    return item
}

function union(item1, item2) {
    const output_array = [...item1]
    item2.forEach(element => {
        if (output_array.indexOf(element) === -1) output_array.push(element)
    })
    return output_array
}

function intersection(item1, item2) {
    const output_array = [...item1]
    output_array.forEach((element, index) => {
        if (item2.indexOf(element) === -1) output_array.splice(index, 1)
    })
    return output_array
}

console.log(reverse('hello i am don.'))

console.log(findDuplicates([0,1,2,0,2]))

console.log(arraySort([2,1999,34,-199,0,134,24,2,-1000]))

console.log(union([1,2,3], [2,3,4,5,6]))

console.log(intersection([1,2,3], [2,3,4,5,6]))
