const APIUtil = {
  toggleFollowUser: (id, method) => {
    return $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'JSON',
      method: method
    })
  }
}

module.exports = APIUtil;