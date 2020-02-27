export const signup = (user) => (
  $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  })
);

export const signin = (user) => (
  $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  })
);

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);