//targeting the elements from html
const ul = document.querySelector(".box-list");
const input = document.querySelector(".input");
const addbtn = document.querySelector(".addbtn");
const delbtn = document.querySelector(".delbtn");

//making a list li element to get add inside a ul element
addbtn.addEventListener("click", function(event){
    event.preventDefault();
    if(input.value === ""){
        alert("Enter a value");
    } else {
        const li = document.createElement("li");
        li.className = "listitem";
        li.innerText = input.value;
        const span = document.createElement("span");
        span.className = "strike";
        span.innerText = "X";
        li.appendChild(span);
        ul.appendChild(li);
        input.value = "";
    }
});

//making the entire list to delete
delbtn.addEventListener("click", function(event){
    event.preventDefault();
    ul.innerHTML = "";
})