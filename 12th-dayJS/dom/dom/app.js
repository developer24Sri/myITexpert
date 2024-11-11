
// Define a var

const form = document.querySelector("#task-form");
const input = document.querySelector("#task");
const ul = document.querySelector(".collection");
const clearBtn = document.querySelector("#clear-btn");
const filterItem = document.querySelector("#search-item");
const listItems = document.querySelectorAll("li");



function loadEventListener(){
//    Add Task
form.addEventListener("submit", addTask);

// Clear Task
clearBtn.addEventListener("click", clearTask)

// Delete single element.   The reasion behind giving ul is inside it only there are list elements so, now as user perspective i want to click the icon button so that the particular list should be get deleted right now 
//in a developer POV that list what we are going to delete should have an clickeble event which remove's the particular <li> tag right so for every li tag which is been created as a developer I can't able to write functions which makes
//same event evert time so to resolve this problem we use event delegation i.e by using the li ancerstor which is hear ul we are going to traverse to the particular li element and remove it
//to make sence as I a user POV i need to click a icon right so which is inside a anchore tag and that anchor tag is inside the li element so now, inside a ul these things are happening so with the help of event object we will be achiveing our goal
//hear our goal is to click a icon which is a event which happening inside the ul tag genrally what ever element which i click inside the ul element that is a target for me so, event.target means in a ul tag i am targeting a element so hear
//we will be targeting the icon which is inside the a tag which is inside the li tag our second goal is after the icon has been clicked the li tag should be removed. where we will be achiving by parentElement, classList and remove methods.
 
ul.addEventListener("click", deleteTask)

// Filter Items
filterItem.addEventListener("input", filterTask)

}

function addTask(event){
    
    event.preventDefault();

    // Validation
    if(input.value === ""){
        alert("Please enter some value");
    } else{
        
        // Create a li element
        const li = document.createElement("li");

        // Add a class to li
        li.className = "collection-item";

        // Add a input value as text
        li.innerText = input.value;

        // Create a link element
        const link = document.createElement("a");

        // Add a class to link
        link.className = "delete-item secondary-content";

        // Append a icon in to link
        link.innerHTML = `<i class="fa fa-remove" id="delete-list"></i>`;

        // Append a link to li
        li.appendChild(link)

        // Append a li to ul
        ul.appendChild(li);

        // Clear a input value
        input.value = "";
    }
    console.log("Add Task Started");
}

function deleteTask(event){
    
    // if(event.target.parentElement.className === "delete-item secondary-content"){
    //     event.target.parentElement.parentElement.remove()
    // }

    // ***

    if(event.target.parentElement.classList.contains("delete-item")){
        event.target.parentElement.parentElement.remove()
    }
}

// function filterTask(e){
//     const searchItems = e.target.value.toLowerCase();
    
//     for(let i = 0; i < listItems.length; i++){
//        const currentItem = listItems[i].innerText.toLowerCase();

//        if(currentItem.includes(searchItems)){
//         listItems[i].style.display = "block"
//        } else {
//         listItems[i].style.display = "none"
//        }
//     }
// }


function filterTask(e) {
    const searchItems = e.target.value.toLowerCase();
    
    for (let i = 0; i < listItems.length; i++) {
        const currentItem = listItems[i].innerText.toLowerCase();

        if (currentItem.indexOf(searchItems) !== -1) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }
}



function clearTask(){
    
    if(confirm("Are you ok to clear")){
        ul.innerHTML = "";

    }
    // let child = ul.children

    // for(let i = 0; i < child.length; i++){
    //     child[i].remove();
    // }
}

document.addEventListener("DOMContentLoaded", function(){
    loadEventListener();
})


// const testString = "testvalue";

// console.log(testString.indexOf("z"));