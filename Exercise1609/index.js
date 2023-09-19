// Exercise 7 (Branching)

const remainder = (num) => {
    // console.log(num)
    return num % 10;
}
const lastDig = (a, b, c) => {
    aDigit = remainder(a)
    bDigit = remainder(b)
    cDigit = remainder(c)
    return remainder(aDigit * bDigit) === cDigit
}

console.log('Exercise 7 - Branching - last digit:',lastDig(25, 21, 125))
console.log('Exercise 7 - Branching - last digit:',lastDig(55, 226, 5190))
console.log('Exercise 7 - Branching - last digit:',lastDig(12, 215, 2142))


// Exercise 8 (Branching)
const lunarZodiac = (age) => {
    // const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooter', 'Dog', 'Pig'];
    const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
    const currentYear = 2020;
    yearOfBirth = currentYear - age

    // console.log('a', yearOfBirth)
    // console.log('b', yearOfBirth % 12)
    return animals[yearOfBirth % 12]
}
console.log('Exercise 8 - Branching - Lurna Zodiac:',lunarZodiac(12))
console.log('Exercise 8 - Branching - Lurna Zodiac:',lunarZodiac(8))
console.log('Exercise 8 - Branching - Lurna Zodiac:',lunarZodiac(11))


// Exercise 4 (Arrays)
const findUnique = (arr1, arr2) => {
    let combinedArr = [...arr1, ...arr2];
    let uniqueElements = [...new Set(combinedArr)]
    uniqueElements.sort(function(a,b){return a - b })
    return uniqueElements;
}

console.log('Exercise 4 - Arrays - Unique element: ',findUnique([2, 3, 5, 1, 6], [4, 2, 3, 6, 7, 8, 9, 10]))
console.log('Exercise 4 - Arrays - Unique element: ',findUnique([2, 8, 5, 1, 6], [4, 2, 3, 6, 7, 8, 9]))


// Exercise 6 (Arrays)
const sumMinimums = (arr) => {
    arr.sort(function (a, b) { return a - b })
    console.log('arr', arr)
    return arr[0];
}

// console.log(sumMinimums([2, 3, 45, 6, 4, 5]))

const sumLowest = (arr1, arr2, arr3) => {
    const sortArr = function(a,b){return a -b }
    let sortArr1 = arr1.sort(sortArr);
    let lowestArr1 = sortArr1[0];
    let sortArr2 = arr2.sort(sortArr);
    let lowestArr2 = sortArr2[0];
    let sortArr3 = arr3.sort(sortArr);
    let lowestArr3 = sortArr3[0];
    
    return lowestArr1 + lowestArr2 + lowestArr3;
}

// console.log(sumLowest([2,3,5,67,7]))
console.log('Exercise 6 - Arrays - Sum of minimums:',sumLowest([1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100]))
console.log('Exercise 6 - Arrays - Sum of minimums:',sumLowest([2, 3, 4, 5],
    [6, 7, 8, 9],
    [21, 34, 56, 100]))