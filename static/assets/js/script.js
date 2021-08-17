var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

document.querySelector('input[name="mapbutton"]').onclick = function() {
  var image = document.getElementById('iremap');
  image.style.width = '25%';
  image.style.height = 'auto';
}