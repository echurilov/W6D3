class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.input = this.$el.data("users-search");
    this.ul = this.$el.data("users");
    this.render();
  }
}
