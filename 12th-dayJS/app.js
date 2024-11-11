const ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
    // console.log(e.target.parentElement.className);
     if(e.target.parentElement.className === "listelement"){
         e.target.parentElement.remove();
     }
})