// function greet()
// {
//     console.log("Happy b'day my dear chiku");
// }

// greet();

/*---------------------------------------- sum ---------------------------------------------- */

// Hoisting
// console.log(sum(1, 2));  // This will not give an error. It will works
function sum(a, b) {
    return a + b;
}

// console.log(sum(1, 2));
// let ans = sum(1, 2);
// console.log(ans);


function isEven(number) {
    // if(number % 2 == 0)
    // {
    //     return true;
    // }
    // return false;

    return ((number % 2) == 0);
}
// console.log(isEven(2));
// console.log(isEven(1));

let arr = [1, 2, 3, 4, 5, 6];

function isHere(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return console.log(`Number is present at ${i} index`);
        }
    }

    return console.log("Numebr is not there");
}

// isHere(arr, 1);
// isHere(arr, 7);


/*                                      Function Expression                                 */

// const greet = function()
// {
//     console.log("This is Function Expression");
// }

// greet();


/*-------------------------------------Arrow Function---------------------------------------- */

// const greet = () =>{
//     console.log("This is arrow function");
// }

// greet();

// const sum3Numbers = (a, b, c) =>{
//     return a * b * c;
// }

// we can also write this function as given below

// console.log(sum3Numbers(1, 2, 3));  // This will gives us an error
const sum3Numbers = (a, b, c) => a * b * c;

// function sum3Numbers(a, b, c)
// {
//     return a * b * c;
// }

// const sum3Numbers = function(a, b, c)
// {
//     return a * b * c;
// }

// console.log(sum3Numbers(1,2,3));
// console.log(sum3Numbers(3,3,3));


// console.log(name1);
// var name1 = "Devi";  // undefined

// let name = "Devi";  // Error
// const name = "Devi";  // Error
// console.log(name1);





/*-------------------------------------Function inside Function---------------------------------------- */

const app = () => {

    const f1 = () => {
        console.log("This is the first function inside the main function");
    }

    const sum = (a, b, c) => {
        return a + b + c;
    }

    const mul = (a, b, c) => a * b * c;
    
    console.log("This is the statement inside the main function");

    f1();
    console.log(sum(1, 2, 3));
    console.log(mul(1, 2, 3));
}

// app();



/*--------------------------------- Callback Functions -------------------------------*/

// const func = (a, b)=>
// {
//     console.log(a + b);
//     // return a + b;
// }


// const mainFunction = (callback)=>
// {
//     console.log("This is the main Function");

//     callback(1, 2);

//     // let c = callback(1, 2);
//     // console.log(c);

// }

// mainFunction(func);



/*----------------------------- Function returning Function ---------------------------- */

const mainFunction = ()=>
{
    const inside = (a, b)=>
    {
        // console.log("This is inside Funciton");
        return a + b;
    }

    return inside;
    
}


// const func = mainFunction();

// console.log(func(1, 2));
