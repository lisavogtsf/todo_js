// To do list, Lisa Vogt
// javascript

var form = document.getElementById("new_task_form");
var list = document.getElementById("list");
var removeText = "Did this thing!";
// var removeThese = document.getElementsByClassName('remove');
// var relaxIpsum = [
// 	"May you be at peace",
// 	"This discomfort will pass",
// 	"Open your heart to change, forgiveness and lovingkindness",
// 	"Take a deep breath"
// ]

// add new item to list when form is submitted
form.onsubmit = function(event) {
	event.preventDefault();

	// take new_item text, create a new li, make
	// a new text node from the text, put it in the li
	// put that on the page at list
	var newTask = document.getElementById("new_task");
	// var newTask.value = relaxIpsum[i];

	var newListItem = document.createElement('li');
	var newTextNode = document.createTextNode(newTask.value + " ");
	list.appendChild(newListItem);
	newListItem.appendChild(newTextNode);

	// create the remove button too
	var removeButton = document.createElement('button');
	removeButton.class = "remove";
	removeButton.innerHTML = removeText;
	newListItem.appendChild(removeButton);

	// clear input form
	newTask.value = "";
};

// try remove using event handling
// get the list itself, add an event listener
list.addEventListener("click", function(event) {
	// debugger;
	// confirm the clicked item exists and is an li
	if (event.target && event.target.nodeName === "BUTTON") {
		console.log("event.target", event.target);
		console.log("event.target.parentNode.innerHTML)", event.target.parentNode.innerHTML);
		// console.log("event.target.class: ", event.target.class);
		// console.log("event.target.className: ", event.target.className);
		// console.log("event.target.parentNode: ", event.target.parentNode);


		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		console.log("removed ", event.target.parentNode);
	}
});








