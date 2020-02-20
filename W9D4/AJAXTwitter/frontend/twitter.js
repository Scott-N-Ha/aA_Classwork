import FollowToggle from './follow_toggle.js';

$(()=>{
  const $buttons = $('button.follow-toggle')
  for (let index = 0; index < $buttons.length; index++) {
    new FollowToggle($($buttons));
  }
});