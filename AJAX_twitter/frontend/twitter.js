const FollowToggle = require('./follow_toggle.js');



$(function(){
  let $button = $('button.follow-toggle');

  $button.each(function(idx,el) {
    new FollowToggle(el);
  });
});
