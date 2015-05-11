'use strict';
$('.sidebar').height($('.content').height() + 15);
$( window ).resize(function() {
  $('.sidebar').height($('.content').height() + 15);
});
