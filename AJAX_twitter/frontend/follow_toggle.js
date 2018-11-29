const APIUtil = require ('./api_util.js');

class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    let fn = this.handleClick.bind(this);
    this.$el.on('click', (e) => fn());
  }
  
  render() {
    let disabled = this.$el.prop('disabled', true);
    
    if (this.followState === true) {
      this.$el.html('Unfollow!');
    } else {
      this.$el.html('Follow!');
    }
  }
  
  handleClick() {
    // e.preventDefault();
    
    if (this.followState === true) {
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = false;
        this.render();
      });
    } else {
      APIUtil.followUser(this.userId)
      .then(() => {
        this.followState = true;
        this.render();
      });
    }
  }
}

module.exports = FollowToggle;