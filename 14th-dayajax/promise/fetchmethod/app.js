//fetch returns a promise i.e then and catch where both are nothing but resolve and reject
document.querySelector(".btn1").addEventListener("click", getText);
document.querySelector(".btn2").addEventListener("click", getJSON);
document.querySelector(".btn3").addEventListener("click", getExternal);

function getText(){
    fetch("data.txt").then(function(response){
        return response.text() //hear if u use just response it just says that it is an object in that object we need text
    }).then(function(data){
        document.querySelector(".output").innerText = data;
    }).catch(function(){
        console.log("Something went wrong");
    })
}

function getJSON(){
    fetch("data.json").then(function(response){
        return response.json();
    }).then(function(data){
        let output = "";
         data.forEach(element => {
            output += `
            <ul>
            <li>Title - ${element.name}</li>
            </ul>
            `
         });
         document.querySelector(".output").innerHTML = output;
    })
}

function getExternal(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.json();
    }).then(function(data){
        let output = "";
        data.forEach(element => {
            output += `
            <ul>
            <li>name - ${element.name}
            </li>
            </ul>`
        });
        document.querySelector(".output").innerHTML = output;
    })
}