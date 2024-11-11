
const person = {
    // Properties
    firstName: "Jagan",
    lastName: "Javid",
    age:26,
    email:"jagan@gmail.com",
    married:false,
    hobbies: ["music", "sports"],
    address: {
        city:"Chennai",
        state: "TN"
    },
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.firstName) // ***
console.log(person["lastName"])
console.log(person.age);
console.log(person.hobbies[1])
console.log(person.address.city)



console.log(person.getFullName())