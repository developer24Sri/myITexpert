document.querySelector("#btn").addEventListener("click", loadData);

function loadData(){
    const xhr = new XMLHttpRequest();

    //open
    xhr.open("GET", "data.txt");

    xhr.onload = function(){
        if(this.status === 200){
            document.querySelector("#output").innerHTML = `<h1>${this.responseText}</h1>`;
        }
        if(this.status === 404){
            document.querySelector("#output").innerHTML = `<h1>Not found</h1>`;
        }
    }
    xhr.send();
}
