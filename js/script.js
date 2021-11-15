$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

fetch('https://restcountries.eu/rest/v2/alpha/cn')
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log('Error:', err.message));
