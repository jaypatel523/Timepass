// jsontypeicode (api)
const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();



// console.log(xhr.readyState);  // 0 - UNSENT (without sent request)
xhr.open("GET", url);
// console.log(xhr.readyState);  // 1 - OPENED 


/*


xhr.onreadystatechange = function (){
    // console.log(xhr.readyState);
    // 2 - HEADERS_RECEIVED
    // 3 - LOADING
    // 4 - DONE

    if(xhr.readyState == 4)
    {
        let response = xhr.response;
        // console.log(typeof response); // string
        response = JSON.parse(response); // string to object
        console.log(typeof response);
    }

}

*/


xhr.onload = function(){
    // console.log(xhr.readyState); // this will directly give readyState = 4
    let response = xhr.response;
    response = JSON.parse(response);
    console.log(typeof response);
}

xhr.send();






