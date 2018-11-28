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
    if (this.followState === true) {
      this.$el.html('Unfollow!');
    } else {
      this.$el.html('Follow!');
    }
  }
  
  handleClick() {
    // e.preventDefault();
    
    if (this.followState === true) {
      return $.ajax({
        url:  `/users/${this.userId}/follow`,
        method: 'DELETE',
        dataType: 'JSON'
      })
      .then(() => {
        this.followState = false;
        this.render();
      });
    } else {
      return $.ajax({
        url:  `/users/${this.userId}/follow`,
        method: 'POST',
        dataType: 'JSON'
      })
      .then(() => {
        this.followState = true;
        this.render();
      });
    }
  }
}




module.exports = FollowToggle;