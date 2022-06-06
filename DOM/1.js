// console.log(window.document); // document object in html
// console.dir(window.document); // document object in javascript







// select element using id
// const ans = document.getElementById("main-heading");
// const ans = console.dir(document.getElementById("main-heading"));
// console.log(ans);
// type = object (check by typeof operator)






// select element with query selector (most useful)
// console.log(document.querySelector(".text"));
// console.log(document.querySelector(".nav-item"));    // it gives only first 
// document.querySelectorAll(".nav-item");








// change itext  (innerText, textContent)
// console.log(document.getElementById("main-heading").textContent);
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);









// change the style 
// const logo = document.querySelector("header .nav .logo");
// logo.style.color = "red";
// logo.style.backgroundColor = "white";
// logo.style.border = "6px solid green";









// get and set attributes
// const anchor = document.querySelector(".nav-item a");
// console.log(anchor.getAttribute("href"));
// anchor.setAttribute("href", "https://www.google.com");
// console.log(anchor.getAttribute("href"));
// console.log(anchor.getAttribute("href").slice(1));    // to remove(1st char)

// const inputType = document.querySelector(".form-todo input");
// console.log(inputType.getAttribute("type"));












// select multiple elements using className and querySelectorAll
// const items = document.getElementsByClassName("nav-item");    // HTML collection
// console.log(items);     // array like object (not array)
// console.log(items[1]);
// console.log(typeof items);
// console.log(Array.isArray(items));

// const items = document.querySelectorAll(".nav-item");        /// Nodelist
// console.log(items);

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);
// can't use forEach method for HTML collection


// we can also use traditional for loop
// for(let items of navItems)
// {
//     // console.log(items);
//     items.style.backgroundColor = "green";
//     items.style.border = "2px solid red";   
// }

// const aTag = document.getElementsByTagName("a");
// for(let tag of aTag)
// {
//     tag.style.color = "black";
// }








// innerHTML (don't use it to add new data) (should use to change that data)
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML += "<li> This is the new list </li>"











// document.createElement
// append
// prepend
// remove
// const newTodo = document.createElement("li");
// newTodo.textContent = "This is new Todo";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodo);
// todoList.prepend(newTodo);

// const seletctTodo = document.querySelector(".todo-list li");
// seletctTodo.remove();

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "This is new li";
// const cloneLi = li.cloneNode(true);
// ul.append(li);
// ul.prepend(cloneLi);

// after creating todo list project
// let newTodo = document.createElement("li");
// newTodo.textContent = "This is new Todo";
// let todoList = document.querySelector(".todo-list");
// todoList.append(newTodo);









// querySelectorAll = static list
// getElementBySomething = live list













// how to get the dimensions of an element // getBoundingClientRect
// const select = document.querySelector(".section-signup");
// const details = select.getBoundingClientRect();
// const details = select.getBoundingClientRect().height;
// console.log(details);










