const ul = document.querySelector(".listitem");
const input = document.querySelector(".input");
const btn = document.querySelector(".task");
const clearBtn = document.querySelector(".clear");

// Add list event listener
 btn.addEventListener("click", function(event){
    event.preventDefault();
    if(input.value === ""){
        alert("Please fill the input");
    } else {
        const li = document.createElement("li");
        li.className = "list-collection";
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = ""; //to empty the input tag
    }
 });

 // Clear list event listener
clearBtn.addEventListener("click", function() {
    ul.innerHTML = ""; // Clears all child elements of ul
});

