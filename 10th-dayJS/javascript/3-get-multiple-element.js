const taskTitle = document.getElementById("task-title");





taskTitle.style.color = "blue";

// listItem.style.color = "orange";

console.log(taskTitle);

// console.log(listItem[0].style.color = "green");

// console.log(listItem.length)

// const listItem = document.getElementsByClassName("collection-item");
const listItem = document.querySelectorAll(".collection li")

for(let i = 0; i < listItem.length; i++){
    

    if(i % 2 === 0){
        listItem[i].style.color = "green"
    } else {
        listItem[i].style.color = "Red"
    }
}


{/* <ul class="collection">
<li class="collection-item">
  List Item 1
</li>
</ul> */}
