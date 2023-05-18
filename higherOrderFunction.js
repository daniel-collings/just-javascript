const array = [ 1, 2, 3 ]

function copyArrayAndManipulate(array, operand, instructions){
    return array.map((num) => (instructions(num, operand)))
}

const result = copyArrayAndManipulate(array, 3, (input, operand) => input * operand)

console.log(`Original Array: ${array}`)
console.log(`Manipulated Array: ${result}`)
