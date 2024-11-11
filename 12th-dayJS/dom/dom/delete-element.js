

<ul>
  <li>
    Item 1
    <span>x</span>
  </li>
</ul>

const ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
    // console.log(e.i.a.className)

    if(e.target.parentElement.className === "delete-item secondary-content"){
        e.target.parentElement.parentElement.remove()
    }
})
