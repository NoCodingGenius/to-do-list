const db = require('./db');

const addToDo = (user_id, item) => {
  return db.one(`
    INSERT INTO
      todos (user_id, item)
    VALUES
      ($1, $2)
    RETURNING
      *
  `[todos.user_id, todos.item])
  .catch(console.log)
};

const deleteToDo = (todoId) => {
    return db.oneOrNone(`
      DELETE FROM
        todo
      WHERE
        id=$1
    `, [todoId])
    .catch(console.log)
};

const findToDo = (userId) => {
  return db.any(`
    SELECT
      *
    FROM
      users_todos
    WHERE
      user_id=$1
  `, [userId])
  .catch(console.log)
};

const updateToDo = (item, id) => {
  db.oneOrNone(`
    UPDATE
      todos
    SET
      item=$1
    WHERE
      id=$2
  `, [item, id])
  .catch(console.log)
};

module.exports = {
  addToDo,
  deleteToDo,
  findToDo
};
