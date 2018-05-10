$(document).ready(function() {
//lets user touch/click Project image taking them to the project codepen
  $('.project-1').on('click', function(e) {
    e.preventDefault();
    console.log('project 1 clicked');
    window.location="https://codepen.io/alan1234/full/bMLvym/"
    return false;
  });
  $('.project-2').on('click', function(e) {
    e.preventDefault();
    console.log('project 2 clicked');
    window.location="https://codepen.io/alan1234/full/WJpqEj/"
    return false;
  });
  $('.project-3').on('click', function(e) {
    e.preventDefault();
    console.log('project 3 clicked');
    window.location="https://codepen.io/alan1234/full/NYJoeV/"
    return false;
  });
});
