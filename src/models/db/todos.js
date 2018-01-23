const db = require('./db');

const addToDo = (todo) => {
  return db.one(`
    INSERT INTO
      todos (item)
    VALUES
      ($1)
    RETURNING
      *
  `[todos.item])
  .catch((error) => {
    console.error({message:'Error occurred with executing todos.addToDo'});
    throw error
  })
};

const deleteToDo = (todoId) => {
    return db.oneOrNone(`
      DELETE FROM
        todo
      WHERE
        id=$1
    `, [todoId])
    .catch((error) => {
      console.error({message:'Error occured with executing todos.deleteToDo'});
      throw error
    })
};

module.exports = {
  addToDo,
  deleteToDo
};
