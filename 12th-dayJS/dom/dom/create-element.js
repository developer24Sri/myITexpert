
const ul = document.querySelector(".collection");

const li = document.createElement("li");

li.className = "collection-item";

li.innerText = "List 6";

const link = document.createElement("a");

link.className = "delete-item secondary-content";

link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

ul.appendChild(li);

console.log(li);