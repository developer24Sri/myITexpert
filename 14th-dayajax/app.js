document.querySelector("#btn").addEventListener("click", loadCustomers);


function loadCustomers(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xhr.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText); //this refers to the initial object which is in line 5 const 
            let output = "";

            data.forEach(element => {
                output += `
                <ul>
                <li>id - ${element.id}</li>
                <li>name - ${element.title}</li>
                <li>body - ${element.body}</li>
                </ul>`
            });
            document.querySelector(".customers").innerHTML = output;
        }
    }
    xhr.send();
}