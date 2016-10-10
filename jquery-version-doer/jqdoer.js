console.log('hi');
// jQuery shortens javascript
// $ is a naming convention it stands for $ = jQuery.

var $newTodoInput = $('#new-todo-input');
var $addBtn = $('#add-btn');
var $todoList = $('#todo-list');
var $doneList = $('#done-list');

var addTodo = function() {
  // get value from input & create new LI with value
var $newLI = $('<li>').text( $newTodoInput.val() );

// append to existing UL
$todoList.append( $newLI );
// clear input field
$newTodoInput.val('');
}

$addBtn.on('click', addTodo);

$todoList.on('click', 'li', function(event) { //don;t have to write and if statement, insted put in another param after 'click',

//create new li
var $doneLI = $('<li>')
    .addClass('done')
    .text(event.target.textContent);
  // append to done UL
  $doneList.append( $doneLI );
  // remove exist LI
  $(event.target).remove();
});
