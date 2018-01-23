const db = require('./db')

const signUp = (user) => {
  return db.one(`
    INSERT INTO
      users(first_name, email, encrypted_password)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `, [user.first_name, user.email, user.password])
  .catch(console.log)
};

const signIn = (email, password) => {
  return db.oneOrNone(`
    SELECT * FROM
      users
    WHERE
      email=$1
      password=$2
  `, [email, password])
  .catch(console.log)
}

module.exports = {
  signUp,
  signIn
};
