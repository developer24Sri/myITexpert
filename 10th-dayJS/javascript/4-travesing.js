let val;


const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:first-child");

// val = list.childNodes;
// val = list.childNodes[2].nodeName;


val = list.children; //***/
val = list.children[0];
val = list.children[0].innerText = "Hello";
val = list.children[0].className;

// Firstchild
val = list.firstChild; // node
val = list.firstElementChild; // ***

// lastchild
val = list.lastChild;
val = list.lastElementChild;

// Count the child
val = list.childElementCount;


// Get the parent
val = listItem.parentElement;

val = listItem.previousElementSibling;

val = listItem.nextElementSibling;



console.log(val);