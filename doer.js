//console.log('hi');

var addBtn = document.getElementById('add-btn');
var newToDoInput = document.getElementById('new-todo-input');
var toDoList = document.getElementById('todo-list');

var addToDo = function() { //create newlist item
  var newToDoContent = newToDoInput.value; //gets value from the input box
  var newLI = document.createElement('li'); //new list item element
  var newContent = document.createTextNode(newToDoContent); //create the text for the 'li' Tag.
  newLI.appendChild(newContent); //adds text cont to li Tag
  toDoList.appendChild(newLI); // finally adds the li to the Ul.
}

addBtn.addEventListener('click', addToDo);
