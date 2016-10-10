console.log('hi');

var addBtn = document.getElementById('add-btn');
var newToDoInput = document.getElementById('new-todo-input');
var toDoList = document.getElementById('todo-list');
var doneList = document.getElementById('done-list')

var addToDo = function() { //create newlist item
  var newToDoContent = newToDoInput.value; //gets value from the input box
  var newLI = document.createElement('li'); //new list item element
  var newContent = document.createTextNode(newToDoContent); //create the text for the 'li' Tag.
  newLI.appendChild(newContent); //adds text cont to li Tag

  //newLI.addEventListener('click', function(event) { //putting 'event' in the () give you inof on the click details.
    //console.log(event.target);
    //event.target.className = 'done';
    //event.target.style.textDecoration = 'line-through'; // changes the text style to line-through, crossing out the item. can use 'event.target'(where the mouse was clicked) instead of 'list item(NewLI)'
//  }); // we can instead add a new class 'done' to each new item, and have a css rule to to make the changes.

  toDoList.appendChild(newLI); // finally adds the li to the Ul.
  newToDoInput.value = ''; //clears the input field also
}

addBtn.addEventListener('click', addToDo);


var addDone = function(event) {
  if (event.target.tagName === 'LI') {
//    event.target.className = 'done';
  }
     var doneLiContent = event.target.textContent; // locate the text of the clicked item
     var doneLI = document.createElement('li'); //create new li for the done list
      doneLI.className = 'done'; //added the 'done' class
     var doneContent = document.createTextNode(doneLiContent); //target's text into the new 'li' tag element
      doneLI.appendChild(doneContent); // add that new text to the new list item.
      doneList.appendChild(doneLI); //add the list itme to the 'Done' list
      toDoList.removeChild(event.target);  // remove the target from its original todo list.
}

toDoList.addEventListener('click', addDone);

// function(event) { //when list is clicked
//   console.log('someone clicked on you or your kid');
//   console.log(event.target.textContent);
//   if (event.target.tagName === 'LI') { // if the clicked tag is a 'li' then
//      event.target.className = 'done'; // change its 'class' to 'done'
//
//
//
// //     doneList.textContent.appendChild(event.target.tagName === 'LI');
//   }
// });
