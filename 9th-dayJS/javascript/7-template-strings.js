

const name = "Javid";
const age = 26;
const job = "Web Devloper";
const city = "Chennai";

let html;


// Without Template strings

// html = "My name is " + name + " " + "im" + " " + age;

// With template strings

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`

console.log(html);