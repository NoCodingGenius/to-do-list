const bcrypt = require('bcrypt');
const db = require('./db');

const encryptPassword = (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

const create = (user) => {
  return db.one(`
    INSERT INTO
      users(full_name, email, password)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `, [user.full_name, user.email, user.password])
  .catch(console.log)
};

const signUp = (user) => {
    return encryptPassword(user.password)
    .then((hash) => {
      user.password = hash
      return create(user);
    }).catch(console.log)
};

const findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT * FROM
      users
    WHERE
      email=$1
  `, [email])
  .catch(console.log)
};

const signIn = (email, password) => {
  return findByEmail(email)
  .then((user) => {
    return bcrypt.compare(password, user.password)
    .then((validUser) => {
      if (!validUser) {
        throw new Error ('Invalid Username/Password')
      }
    })
    .catch(console.log)
  });
};

module.exports = {
  signUp,
  signIn
};
