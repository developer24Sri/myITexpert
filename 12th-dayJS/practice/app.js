const input = document.querySelector(".input");
const addtask = document.querySelector(".addtask");
const ul = document.querySelector(".box");
const deleteall = document.querySelector(".deltask");


// To add a single task
addtask.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value === "") {
        alert("Please enter a task to do");
    } else {
        const li = document.createElement("li");
        li.className = "boxlist";
        li.innerText = input.value;
        const span = document.createElement("span");
        span.className = "del";
        span.innerText = " - delete";
        li.appendChild(span);
        ul.appendChild(li);
        input.value = "";
    }
});

// To delete a single task
ul.addEventListener("click", function (e) {
    if (e.target.parentElement.className === "boxlist") {
        e.target.parentElement.remove();
    }
})

// To delete every task
deleteall.addEventListener("click", function (e) {
    ul.innerHTML = "";
})

// To search the added list

