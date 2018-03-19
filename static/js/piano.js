'use strict';

$(document).ready(function() {

  var scale = [];

  var removeElement = function removeElement(dataAttr) {
    var i = scale.indexOf(dataAttr);
    if (i !== -1) {
      scale.splice(i, 1);
    }
    console.log(scale);
  };

  $('.key-black, .key-white').click(function(e) {
    e.stopPropagation();
    var clicks = $(this).data('clicks');
    if (clicks && ($(this).hasClass('key-black'))) {
      $(this).css('background', '#000000');
      removeElement($(this).attr('data-action'));
    } else if (clicks && ($(this).hasClass('key-white'))) {
      $(this).css('background', '#FFFFFF');
      removeElement($(this).attr('data-action'));
    } else {
      $(this).css('background', '#DDDDDD');
      scale.push($(this).attr('data-action'));
      console.log(scale);
    }
    $(this).data('clicks', !clicks);
  });

  $('.generate').click(function() {
    if (typeof scale !== 'undefined' && scale.length > 0) {
      for (var index = 0; index < 12; index++) {
        var randomIndex = Math.floor(Math.random() * scale.length);
        $('.output').append('<p>' + 'i1\t' + index + '\t' + '1\t' + scale[randomIndex] + '</p>');
      }
    } else {
      $('.output').append('<p>Please select some notes!</p>');
    }
  });
});
