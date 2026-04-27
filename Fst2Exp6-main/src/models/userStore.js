const bcrypt = require("bcrypt");

const users = [
  {
    id: 1,
    username: "manikanta",
    password: bcrypt.hashSync("secure123", 10),
    role: "student"
  }
];

const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

module.exports = {
  findUserByUsername
};