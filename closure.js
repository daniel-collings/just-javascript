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
    function incrementCounter(){ 
        console.log(counter)
        return counter++ 
    } 

    // returns function plus all of the local memory from the outer 
    return incrementCounter 
}

const myNewFunction = outer()
myNewFunction() // 0
myNewFunction() // 1

const anotherNewFunction = outer() // 0 and 1 return due to seperate exec contexts being created
anotherNewFunction() // 0
anotherNewFunction() // 1

// within the exec context the local memory is known as Variable Evironment (VE)
// the closure/scoping/backpacking technical terming: closed over VE or Persistent Lexical Scope Reference Data.


//closure ideal for helper functions where you only want to run the function once. An example of this is nth prime number. By memorising this you save on compute time.