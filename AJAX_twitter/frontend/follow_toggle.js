// <% if current_user.follows?(user) %>
//   <button class="follow-toggle" type="button" name="button"></button>
// <% end %>

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
    } else if (this.followState === "following") {
      this.$el.attr("disabled", true);
    }
  }

  handleClick() {
    console.log("user", this.userId, "is", this.followState, "by", this.currentUserId);
    event.preventDefault();

    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      $.ajax({url: `/users/${this.userId}/follow`,
        method: 'POST',
        data: {
          follower_id: this.currentUserId,
          followee_id: this.userId,
        },
        dataType: 'JSON'})
      .then(() => {
        this.followState = "followed";
        this.render();
        console.log("changed to:", this.followState);
      });
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      $.ajax({url: `/users/${this.userId}/follow`,
        method: 'DELETE',
        dataType: 'JSON'})
      .then(() => {
        this.followState = "unfollowed";
        this.render();
        console.log("changed to:", this.followState);
      });
    }
  }
}

module.exports = FollowToggle;
