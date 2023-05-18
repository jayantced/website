console.log('wwwwwww');

//window.alert("fgddfdggfd");
let firstName = "Jayant";
let age = "50";
let student = false;

console.log("Hello", firstName);
console.log("You are", age, "old");
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;

let students = 20;

students %= 2;

console.log(students);

let userName = window.prompt("Enter zYour Name");
console.log(userName);


let username;

document.getElementById("user-name-btn").onclick = function(){
    username = document.getElementById("user-name").value;
    console.log(username);
}