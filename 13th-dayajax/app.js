document.querySelector("#btn").addEventListener("click", loadData);



function loadData(){

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "data.txt");

    xhr.onload = function(){


        if(this.status === 200){
            document.querySelector("#output").innerHTML = `<h1>${this.responseText}</h1>`; //the this keyword represents the initial opbject that is const xhr which holds the obj xmlhttprequest
        } 

        if(this.status === 404){
            document.querySelector("#output").innerHTML = `<h1>Not Found</h1>`; 
        }
    }

    xhr.send();
}




