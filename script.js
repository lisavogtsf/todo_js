// To do list, Lisa Vogt
// javascript

var form = document.getElementById("new_task_form");
var list = document.getElementById("list");
var removeText = "Remove";
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
	var newTextNode = document.createTextNode(newTask.value);
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

// remove tasks, when complete
// note this function is probably not beginning correctly
// want the button to be selected
// var button = document.getElementsByTagName("button");
// 	//debugger;
// button.onclick = function (event){
// 	console.log(button);
// 	this.parentNode.parentNode.removeChild(this.parentNode);

// }









