/*----------------------------- Some methods of an array----------------------------------*/
// forEach
// Map
// filter
// reduce



/****************************** forEach ************************************************* */
// It takes callback function as argument




const arr = [10, 20, 30, 40, 50];

// first parameter is values of array and second para is index
const multiplyBy2 = (num, idx)=>
{
    console.log(`Index = ${idx} and ${num} * 2 = ${num  * 2}`);
    // console.log("Index is : ", idx, " and number is : ", num);
}

// for(let i = 0; i<arr.length; i++)
// {
//     multiplyBy2(arr[i], i);
// }


// arr.forEach(multiplyBy2);




// If you don't want to take index then there is no problem
arr.forEach(function(value){
// arr.forEach(function(value, index){
    // console.log(`Index is ${index} and ${value} * 3 = ${value*3}`);
    // console.log(value);
})



// const arr2 = [
//     {Name : "Jay1", Id : "17"},
//     {Name : "Jay2", Id : "18"},
//     {Name : "Jay3", Id : "19"},
//     {Name : "Jay4", Id : "20"}
// ]

// for(let user of arr2)
// {
//     console.log(user.Name, user.Id);
// }

// simple

/*
arr2.forEach(function(user){
    console.log(user.Name, user.Id);
})
*/


//arrow function
// arr2.forEach((user)=>{
//     console.log(user.Name);
// })






/*--------------------------------------- Map methods -------------------------------------------- */
// It r=returns an array
/*

const numbers = [2,5,1,3,6];

// const square = (n)=>{
//     return n * n;
// }

// callback function (square)
// const arraySquare = numbers.map(square);

// console.log(Array.isArray(arraySquare));
// console.log(arraySquare);


const arraySquare = numbers.map((n, idx)=>{
    return `${idx} => ${n * n}`;
})



// console.log(arraySquare);



const arr2 = [
    {Name : "Jay1", Id : "17"},
    {Name : "Jay2", Id : "18"},
    {Name : "Jay3", Id : "19"},
    {Name : "Jay4", Id : "20"}
]


const nameOfUsers = arr2.map((user)=>{
    return user.Name;
})
// console.log(nameOfUsers);

const Ids = arr2.map(function(user){
    return user.Id;
})
// console.log(Ids);
*/







/*------------------------------------ Filter method -------------------------------- */
// It returns true or false
/* 




const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isOdd = (n)=>{
    return n % 2 !== 0;
}

const odd = nums.filter(isOdd);

// console.log(odd);


const even = nums.filter((n)=>{
    return n % 2 === 0;
})

// console.log(even);
*/










/*-------------------------------- Reduce method  ----------------------------------- */


/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .reduce(accumulator, currentValue); //or
// .reduce(previousValue, currentValue);


const sum = nums.reduce((prev, curr)=>{
    return prev + curr;
}, 0) // It will give initial value = 0 (means PreviousValue = 0)

console.log(sum);




// realtime Example

const cart = [
    {Product : "HairOil", Price : 200},
    {Product : "Shampoo", Price : 100},
    {Product : "Conditioner", Price : 50},
    {Product : "Soap", Price : 20}
]

const finalPrice = cart.reduce((total, curr)=>{
    return total + curr.Price;
}, 0);

console.log(finalPrice);
*/











