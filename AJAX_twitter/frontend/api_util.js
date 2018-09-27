const APIUtil = {
  followUser: id => {
    return APIUtil.toggleFollow(id, 'POST');
  },

  unfollowUser: id => {
    return APIUtil.toggleFollow(id, 'DELETE');
  },

  toggleFollow: (id, method) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      method
    });
  }
};

module.exports = APIUtil;
