const array = [ 1, 2, 3 ]

const multiplyBy = (input, operand) => input * operand
const divideBy = (input, operand) => input / operand


function copyArrayAndManipulate(array, operand, instructions){
    return array.map((num) => (instructions(num, operand)))
}

const result = copyArrayAndManipulate(array, 3, multiplyBy)

console.log(`Original Array: ${array}`) // [1, 2, 3]
console.log(`Manipulated Array: ${result}`) // [1, 2, 3]
