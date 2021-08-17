var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})


// CLICK ATTEMPT 1

// document.querySelector('input[name="mapbutton"]').onclick = function() {
//   var image = document.getElementById('iremap');
//   image.style.width = '25%';
//   image.style.height = 'auto';
// }

// CLICK ATTEMPT 2

// $("#button").click(function() {
//   $('.transform').toggleClass('transform-active');
// });