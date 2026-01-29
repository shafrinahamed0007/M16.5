const person = ["akib", "rakib", "shakib", "nokib"];
const sortedPersons = person.sort();
console.log(sortedPersons);

// sort --> sajano

const numbers = [4,7,12,8,38,6];

/**
 * Ascending --> smaller to larger
 * Descending --> larger to smaller
 */


// const numbers_asc = numbers.sort(); // not working properly

const numbers_asc = [...numbers].sort(function(a,b){return a-b});
const numbers_dsc = [...numbers].sort(function(a,b){return b-a});

console.log(numbers_asc);
console.log(numbers_dsc);