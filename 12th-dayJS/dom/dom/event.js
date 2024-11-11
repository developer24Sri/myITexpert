
const ul = document.querySelector(".collection");
const btn = document.querySelector(".add-task");
const input = document.querySelector("#task");

btn.addEventListener("click", function(event){

  event.preventDefault();
  
  if(input.value === ""){
    alert("Please fill the fields")
  } else{
    const li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = input.value;
    // const link = document.createElement("a");
    // link.className = "delete-item secondary-content";
    // link.innerHTML = `<i class="fa fa-remove"></i>`;
    // li.appendChild(link);
    ul.appendChild(li);
    input.value = ""
  }

})

