// C# Tech Test implemented using JS

/**
 * 
 * 
1. Write a simple console program that:
    - initialises an array of integers, and
    - outputs the array to the console using the function outArray().
*/

const array = [1, 3, 5, 10, 23, 55, 88, 23, 28]

function outArray(title, arr){
    console.log(title, arr)
    return arr
}

const initialArr = outArray("Initial", array)



/**
 * 
 * 
2. Write a function

    int[] sortedInts(int[] ints)

to return an array of its 'ints' argument in ascending order.
Display this sorted list of ints:

    int[] sorted = sortedInts(ints);
    outArray("Sorted", sorted);
*/



const sortedArr = outArray("Sorted", array.sort((a,b) => a - b))

/**
 * 
 * 
3. Filter the sorted array to just include odd numbers:

    int[] odd = ...
    outArray("Odd", odd);
*/



const oddArr = outArray("Odd", array.filter(f => ((f % 2) > 0)))

/**
 * 
 * 
4. Modify the program to (additionally) read a few more integers from the command line:

    var argvInts = fromArgv(argv);
    outArray("ArgvInts", argvInts);
*/

const argvArr = outArray("ArgvInts", process.argv[2].slice(1,process.argv[2].length -1).split(',').map(o => parseInt(o)))



/**
 * 
 * 
6. Now combine the arrays 'odd', 'argvInts', 'fileInts' into a single array but with duplicates removed.

    var combined = ...
    outArray("Combined", combined);
*/

const combinedArr = outArray("Combined", [
    ...initialArr,
    ...sortedArr,
    ...oddArr,
    ...argvArr
])



/**
 * 
 * 
7. Write a function to calculate the average value of the ints in 'combined'.

    var average = averageOfInts(combined);
    Console.WriteLine(...)
*/

function averageOfInts(arr){
    return arr.reduce((p, c) => p + c, 0) / arr.length
}

const average = averageOfInts(combinedArr)
console.log(average)



/**
 * 
 * 
8. Write a function to split the combined list into two lists with names
'higher' and 'lower' such that 'higher' contains all those integers above average
and 'lower' contains the remainder.

    var (higher, lower) = highLow(combined, average);
    outArray("Higher", higher);
    outArray("Lower", lower);
*/

function highLow(arr){
    arr = arr.sort((a,b) => a - b)

    return {
        lower: arr.slice(0, (arr.length) / 2),
        higher: arr.slice(((arr.length) / 2), arr.length)
    }
}

const { higher, lower } = highLow(combinedArr)

outArray("Higher", higher)
outArray("Lower", lower)