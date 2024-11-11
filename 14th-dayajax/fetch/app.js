//as dicussed in previous class this is the advance concept of fetching the data from the localdevice, JSONfile and via external format
//where use used fetch() instead of xmlhttprequest()
document.querySelector(".btn-1").addEventListener("click", getText);
document.querySelector(".btn-2").addEventListener("click", getJson);
document.querySelector(".btn-3").addEventListener("click", getExternal);

function getText(){
    fetch("data.txt").then(function(response){
        return response.text()
    }).then(function(data){
        document.querySelector("#output").innerText = data;
    }).catch(function(){
        
        console.log("Some thing went worng")
    })
}

function getJson(){
    fetch("data.json").then(function(response){
       return response.json();  
    }).then(function(data){
        let output = "";
            data.forEach(element => {
               output += `
                 <ul>
                    <li>Title - ${element.title}</li>
                 </ul>
               `
            });

            document.querySelector("#output").innerHTML = output;
    })
}

function getExternal(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
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

            document.querySelector("#output").innerHTML = output;
    })
}



