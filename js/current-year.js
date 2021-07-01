$(function () {
  var span = $('#current-year');
  // Check if it exists
  if (span) {
    // Set current year
    span.text(new Date().getFullYear());
  }
})
