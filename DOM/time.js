// setTimeout(function, milliseconds)
// setInterval(function, milliseconds)


const hello = ()=>{
    console.log("Hey there, I am learning javascript");
}

// setTimeout(hello, 2000);  
// it will take two seconds to execute the code
// also this function returns id

// setInterval(hello, 1000); 
// it will execute hello() in every 1 second
// also this function returns id


// clearTimeout() 

console.log("script start here...");

// const id = setTimeout(hello, 2000);
// console.log(id);

// const id = setInterval(hello, 2000);
// console.log(id);

console.log("This is some code after settimeout / setInterval");


// clearTimeout(id);  // setTimeout terminates here (it will not execute the code of hello function)
// clearInterval(id); // setInterval terminates here (it will not execute the code of hello function)


console.log("script end here...");