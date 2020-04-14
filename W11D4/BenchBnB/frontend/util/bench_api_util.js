export const fetchBenches = data => (
  $.ajax({
    url: 'api/benches',
    data
  })
);