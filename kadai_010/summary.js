$(function() {

  $('#change-color').on({
    'click': () => {
      $('P').css('color', 'blue');
    }
  });

  $('#change-text').on('click', function() {
    $('p').text('いい天気ですね');
  });

  $('#fade-out').on('click', function() {
    $('p').fadeOut(3000, function() {
    }); 
  });

  $('#fade-in').on('click', function() {
    $('p').fadeIn(3000, function() {
    }); 
  });

});
