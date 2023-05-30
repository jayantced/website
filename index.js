// console.log('wwwwwww');

// //window.alert("fgddfdggfd");
// let firstName = "Jayant";
// let age = "50";
// let student = false;

// console.log("Hello", firstName);
// console.log("You are", age, "old");
// console.log(student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;

// let students = 20;

// students %= 2;

// console.log(students);

/* let userName = window.prompt("Enter Your Name");
console.log(userName); */


// let username;

// document.getElementById("user-name-btn").onclick = function() {
//     username = document.getElementById("user-name").value;
//     console.log(username);
// }

// let age = Number(window.prompt("Enter your age"));
// console.log(age);

// age += 1;
// console.log(age, typeof age);

// const pi = 3.14;
// let radius = Number(window.prompt("Enter radius"));
// let circumference;

// circumference = 2 * pi * radius;
// console.log(circumference);

let height;
let base;
let hypotenuse;


// hypotenuse = Math.hypot(3, 4);

document.getElementById("tri-submit").onclick = function() {
    height = document.getElementById("height").value;
    base = document.getElementById("base").value;
    hypotenuse = Math.sqrt( Number(Math.pow(height, 2)) + Number(Math.pow(base, 2)) );
    document.getElementById("hypotenuse").innerHTML = "hypotenuse is " + hypotenuse;
    // console.log(typeof(Math.pow(height, 2)));
}