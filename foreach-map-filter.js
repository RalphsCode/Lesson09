/*
Write a function called doubleValues which accepts an array and returns a new array 
with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

const numArray = [12, 15, 64, 19, 22, 94, 156, 1044];

function doubleValues(arr){
    return arr.map(function(num) {
        return num * 2;
    });
   }

doubleValues([1,2,3])

/*
Write a function called onlyEvenValues which accepts an array and returns a new array 
with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    return arr.filter(function(val) {
        return val % 2 === 0;
    })
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstAndLastArr = [];
    for (let i = 0; i < arr.length; i++){
        const nameEl = arr[i].split('');
        const firstAndLast = nameEl[0] + nameEl[nameEl.length -1];
        firstAndLastArr.push(firstAndLast);
        }
        return firstAndLastArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    return newArr = arr.map(function(val){
        return val = { ...val, [key]: value};
        });
    }

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    const letters = str.toLowerCase().split('');
    const vowels = "aeiou";
    const charCount = {};

    //  Create an array of only the vowels
    const vowelArray = letters.filter(function(value) {
        // note to self: indexOf returns -1 (false) if letter not found
        return vowels.indexOf(value) !== -1;
        });
    
    // Iterate through vowelArray summing the vowel count
    function countVowels(arr) {
            arr.forEach(function (vowel) {
                charCount[vowel] = (charCount[vowel] || 0) + 1;
            })
            return charCount;   
        }  //  END countVowels()

    return countVowels(vowelArray);
}  // END vowelCount()

/*
Write a function called doubleValuesWithMap which accepts 
an array and returns a new array with all the values in 
the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    const doubles = arr.map(function(val){
        return val * 2;
    }) // END doubles
    console.log(doubles);
    return doubles;
}  // END doubleValuesWithMap

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    const timesIndex = arr.map((val, i) => {
        return val * i;
    })  // END timesIndex
    return timesIndex;
}  // END valTimesIndex()

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    const firstNameArr = [];
    for (fName of arr) {
        firstNameArr.push(fName[key]);
         } // END for
    return firstNameArr;
        }  // END extractKey()

/*
Write a function called extractFullName which accepts 
an array of objects and returns a new array with the 
value of the key with a name of "first" and the value 
of a key with the name of  "last" in each object, 
concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    const fullNames = [];
    for (names of arr){
        const fullName = names['first'] + ' ' + names['last'];
        fullNames.push(fullName);
        } // END for
    return fullNames;
}  // END extractFullName()

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr) {
    return arr.filter((val) => {
        return val.isCatOwner;
    })
}  // END filterByValue

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const matches = arr.filter((val) => {
        return val === searchValue;
    }) // END arr.filter
    if (matches.length === 0) {
        return undefined;
        } // END if
    else {
        return searchValue;
    }  // END else
}  // END find()

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const foundValue = arr.find((obj) => {
        return obj[key] === searchValue;
    })
    return foundValue;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const letters = str.toLowerCase().split('');
    const vowels = 'aeiou';
    let nonVowels = '';

    letters.forEach((lett) => {
        if (vowels.indexOf(lett) === -1) {
            nonVowels = nonVowels + lett;
        } // END if...
    })  // END forEach
    return nonVowels;
}  // END removeVowels()

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    // seperate out the odd numbers
    const odd = arr.filter((num) => {
    return num % 2 !== 0;});
    // double the odd numbers
    const doubled = odd.map((num) => {
        return num * 2;});
        
return doubled;
} // END doubleOddNumbers
