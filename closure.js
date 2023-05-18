function createFunction(){
    return input => input * 2
}

const generatedFn = createFunction()
const result = generatedFn(2)

console.log(`Result: ${result}`)

 // create execution context
function outer(){
    // local memory of the above context contains a reference to counter and incrementCounter function
    let counter = 0

    // creates its own execution context with local memory of counter.
    // when it doesn't find counter in it's local memory, it'll then reach out to outer's context and increment that counter.
    function incrementCounter(){ return counter++ } 

    // returns function plus all of the local memory from the outer 
    return incrementCounter 
}

const myNewFunction = outer()
myNewFunction() // 1
myNewFunction() // 2