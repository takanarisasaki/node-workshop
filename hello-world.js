//Question 1: Using setTimeout
console.log("Question 1:");

console.log("Hello World!");

setTimeout(function() {
    console.log("Hello World Again!!");
}, 0);  //this should be 10000 for 10 seconds


//Question 2: Mimicing setInterval function with setTimeout
console.log("Question 2:");

//Try to do this using setTimeout
/*
setInterval(function() {
    console.log("Hello!");
}, 2000);
*/


function callInfinitely() { 
    setTimeout (function () {
        console.log("Hello World!");
        callInfinitely();
    },2000);
}

callInfinitely();