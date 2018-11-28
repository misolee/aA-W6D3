const FollowToggle = require("./follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
  $('button.follow-to').each(function (index, button) {
    new FollowToggle(button);
  });
});