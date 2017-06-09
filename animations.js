$(document).ready(function () {

  $('.tweet-compose').on('click', function () {
    $(this).toggleClass('tweet-compose-active');
    $('#tweet-controls').toggle();
  })

  var maxLength = 140;

  $('.tweet-compose').keyup(function () {
    var length = $(this).val().length;
    var remainChars = maxLength - length;
    $('#char-count').text(remainChars);
    if (remainChars <= 10) {
      $('#char-count').css({
        'color': 'red'
      });
    } else if (remainChars > 10) {
      $('#char-count').css({
        'color': '#999'
      });
    } else if (remainChars < 140) {
      $('#tweet-controls').disabled();
    }
  })




})