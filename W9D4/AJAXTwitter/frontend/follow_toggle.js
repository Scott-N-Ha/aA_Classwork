const APIUtil = require('./api_util.js');

export default class FollowToggle {
  constructor(el){
    this.userId = el.data("user-id");
    this.followState = el.data("initial-follow-state");
    this.el = $(el);
    this.render();
    this.el.on('click', event => this.handleClick(event));
  }

  render(){
    this.el.html(this.followState === "unfollowed" ? "Follow!" : "Unfollow!");
  }

  handleClick(event){
    let that = this;
    event.preventDefault();

    let method = (that.followState === 'unfollowed' ? 'POST' : 'DELETE');
    this.el.prop('disabled', true);
    this.el.html('Processing...')

    APIUtil.toggleFollowUser(that.userId, method).then(() => {
      this.el.prop('disabled', false);
      that.followState = (method === 'POST' ? 'followed' : 'unfollowed');
      that.render();
    })
  }
}