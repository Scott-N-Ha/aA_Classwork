// const action = {
//   type: "change role",
//   newRole: "Student"
// };

const roleReducer = (oldRole = null, action) => {
  if (action.type === "change role") {
    return action.newRole;
  } else {
    return oldRole;
  }
};

export default roleReducer;