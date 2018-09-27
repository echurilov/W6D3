const FollowToggle = require('./follow_toggle.js');

$(function(){
  let $button = $('button.follow-toggle');

  $button.each(function(idx,el) {
    new FollowToggle(el);
  });
});

$(function(){
  let $nav = $('nav.users-search');

  $nav.each(function(idx,el) {
    new UsersSearch(el);
  });
});
