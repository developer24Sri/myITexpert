//Defining variables:
const form = document.querySelector("#task-form");
const input = document.querySelector("#task");
const ul = document.querySelector(".collection");
const listItems = document.querySelectorAll("li");
const searchInput = document.querySelector("#search");
const addbtn = document.querySelector(".addbtn");
const clearbtn = document.querySelector(".clear-btn");
const clearallbtn = document.querySelector("#btn-test");

//adding a list element:
addbtn.addEventListener("click", function(event){
    event.preventDefault();
    if(input.value === ""){
        alert("Enter a value");
    } else {
        const li = document.createElement("li");
        li.className = "collection-item";
        li.innerText = input.value;
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = `<i class="fa fa-remove clear-btn"></i>`;
        li.appendChild(link);
        ul.appendChild(li);
        input.value = "";
    }
});

// Search functionality


ul.addEventListener("click", function(e) {
    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove()
    }
});

clearallbtn.addEventListener("click", function(e){
    ul.innerHTML = "";
});