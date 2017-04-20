$(document).ready(function() {

var list = $('#new-list-container');
var listo = []; // array to store tasks
var listoStarted = [];
var listoFinished = [];

var inputForm = $('#newTaskForm');

var Task = function(task) {  //constructor function for making new tasks
  this.task = task;
  this.class = "new";
}

inputForm.hide(); // should hide the newTaskForm section upon loading

$(document).keydown(function(event) {
  if (event.which == 13) {
    $('#add-todo').trigger('click');
  }
})

$('#add-todo').click(function(){ // shows the newTaskForm when the new task button is presset
  inputForm.show();
  $('input').focus();
});

$('#cancel').click(function(){ // shows the newTaskForm when the new task button is presset
  inputForm.hide();
});

$('#saveNewItem').mouseenter(function(){ // on hover changes background color of add button
  $('#saveNewItem').css({"background":"#4A4B55"})
});

$('#saveNewItem').mouseleave(function(){ // resets add button background color after hover
  $('#saveNewItem').css({"background" : '#3E3D41'})
});

$('input').focus(function(){ // changes input background color on focus
  $(this).css({"background":"#4A4B55"})
});

$('input').focusout(function(){ // resets input background color after focus
  $(this).css({"background":"#3E3D41"})
});



var addTask = function(task) { // function for adding new tasks
  if(task) { // conditional to make sure there is text to input before running function
    task = new Task(task) // creates a new object
    listo.push(task); // pushes object to listo array
  }
};

$('#saveNewItem').click(function(event){ // executes save process by taking input value and invoking addTask with it
  var pushTask = $('input').val();
  addTask(pushTask);
  $('input').val(''); // clearing input section
  list.append(function() {
    return "<li class=\"new\">" + listo[listo.length-1].task + "</li>";
  })
});

$('input').keydown(function(event) {
    if (event.which == 13) {
      $('#saveNewItem').trigger('click');
    }
});
//
// $("#todo-content-new ul li").click(function(event) {
//   var index = $("li").index(this);
//   listoStarted.push(listo.splice(index, index+1));
//   console.log(listoStarted);
// });


});
