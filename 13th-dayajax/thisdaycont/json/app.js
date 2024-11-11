
//this is an traditional method of fetching a data from a file from a localdevice and with the help of API where we use
//xmlhttprequest() but in tommorow's class we will be seing about AJAX which is the advance concept of the same fetching 
//a data with the help of fetch keyword and promise concept.
//mainly it uses callbacks like onload for an successful completation and onerror for errors
document.querySelector(".btn-1").addEventListener("click", loadCustomer);
document.querySelector(".btn-2").addEventListener("click", loadCustomers);


function loadCustomer(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json");

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText);
            
            document.querySelector(".customer").innerHTML = `
            <p>${data.id}</p>
            <p>${data.name}</p>
            <p>${data.role}</p>
            '`
        }
    }

    xhr.send();

}


function loadCustomers(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText);
            let output = "";

            data.forEach(element => {
               output += `
                 <ul>
                    <li>id - ${element.id}</li>
                    <li>name - ${element.title}</li>
                    <li>role - ${element.body}</li>
                 </ul>
               `
            });

            document.querySelector(".customers").innerHTML = output;
        }
    }
    xhr.send();
}





// let data = {
//     x:"Hello",
//     y:"Vanakam"
// }

// console.log(data);

// const objToString = JSON.stringify(data);
// console.log(objToString);

// const backToObject = JSON.parse(objToString);


