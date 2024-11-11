//Create an elemement
// const ul = document.querySelector("#itemList");
// const li = document.createElement("li");
// li.className = "ListItem";
// li.innerText = "list 1";
// const link = document.createElement("a");
// link.className = "innerList-item";
// link.innerHTML = `<a href="#">--></a>`;
// li.appendChild(link);
// ul.appendChild(li);


// make an event:
// const btn = document.querySelector(".task");
// btn.addEventListener("click", function click(){
//     let a = 5;
//     let b = 5;
//     let c = a + b;
//     alert(`5 + 5 = ${c}`);
// })


//getting an value from an input and making it an event by displaying in alert:
var input = document.querySelector(".input");
const btn = document.querySelector(".task");

btn.addEventListener("click", function(event){
    event.preventDefault(); //to avoid refresh
    if(input.value === ""){
        alert("plesse enter a number") 
    } else {
        alert(`the value is: ${input.value}`);
    }
});


// function addItem() {
//             // Get input value
//             var newItem = document.querySelector("#itemInput").value;

//             // Create a new list item
//             var li = document.createElement("li");
//             li.appendChild(document.createTextNode(newItem));

//             // Add the new item to the list
//             document.getElementById("itemList").appendChild(li);
//         }
//   console.log(li);