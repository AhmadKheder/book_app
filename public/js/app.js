function burger() {
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '16px 16px 200vw 200vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit() {
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = ' 4px 4px';
  links.style.display = 'none';
  quit.style.display = 'none';
}


$('.viewButton').click(function () {
  console.log("inside");
  $(this).parent().find('.toggleForm').slideToggle();
});
$('#editBtn').click(function () {
  $('#toggleForm').toggle();
});

