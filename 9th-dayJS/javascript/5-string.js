
const firstName = "Jagan";
const lastName = "Javid";
const age = 26;
const role = "Web Developer";

const tags = "Web Designer, Web Developer, UIUX";

let val;

// Length
val = firstName.length;


// Add string
val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Concat
val = firstName.concat(" ", lastName, " " , "test")

val = firstName[2]

val = firstName.charAt(2);

val = firstName.indexOf("g")

val = firstName.split(",");

val = tags.includes("Designer");




console.log(val);