function copyArrayAndManipulate(array, operand, instructions){
    return [array, array.map((num) => (instructions(num, operand)))]
}

const [og, result] = copyArrayAndManipulate([ 1, 2, 3 ], 3, (input, operand) => input * operand)

console.log(`Original Array: ${og}`)
console.log(`Manipulated Array: ${result}`)
