const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers.reverse());

let reverseNumber = numbers.reverse();

for(let number of reverseNumber){
    // console.log(number);
}

let number1 = [30,35,99,14,22];

let number1_rev = [];

for(let num of number1){
    // console.log(num);
   number1_rev.unshift(num);
}

// console.log(number1_rev);

const friends = ["Shakib", "Babu", "Shafrin", "Ahamed"];
let friend_rev = [];

// for(friend of friends){
//     console.log(friend);
//     friend_rev.unshift(friend);
// }

// for(let i =0; i<friends.length; i++){
//     const friend = friends[i];
//     friend_rev.unshift(friend);
// }

// reverse side loop

for(let i = friends.length-1; i>=0; i--){
    const friend = friends[i];
    console.log(friend);

}

// console.log(friend_rev);



