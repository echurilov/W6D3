const APIUtil = require('./api_util.js')

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.currentUserId = this.$el.data("current-user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.attr("disabled", false);
      this.$el.text("Follow!!");
    } else if (this.followState === "followed") {
      this.$el.attr("disabled", false);
      this.$el.text("Unfollow!!");
    } else if (this.followState === "unfollowing") {
      this.$el.attr("disabled", true);
      this.$el.text("Unfollowing...");
    } else if (this.followState === "following") {
      this.$el.attr("disabled", true);
      this.$el.text("Following...");
    }
  }

  handleClick() {
    console.log("user", this.userId, "is", this.followState, "by", this.currentUserId);
    event.preventDefault();

    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        this.followState = "followed";
        this.render();
        console.log("changed to:", this.followState);
      });
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId).then(() => {
        this.followState = "unfollowed";
        this.render();
        console.log("changed to:", this.followState);
      });
    }
  }
}

module.exports = FollowToggle;
