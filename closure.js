function createFunction(){
    return input => input * 2
}

const generatedFn = createFunction()
const result = generatedFn(2)

console.log(`Result: ${result}`)
