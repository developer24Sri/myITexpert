let data =  {
    x:"hello",
    y:"vanakam"
}

console.log(data);

const objToString = JSON.stringify(data);
console.log(objToString);

const backToObject = JSON.parse(objToString);
console.log(backToObject);