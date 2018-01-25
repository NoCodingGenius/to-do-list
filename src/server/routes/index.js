const db = require('../../models/db/db');
const todos = require('../../models/db/todos');
const users = require('../../models/db/users');

const router = require('express').Router();

router.get('/signup', (request, response) => {
  response.render('users/sign-up');
});

router.post('/signup', (request, response) => {
  users.signUp(request.body)
    .then((user) => {
      response.redirect('/signin');
    });
});

router.get('/signin', (request, response) => {
  response.render('users/sign-in');
});

router.post('/signin', (request, response) => {
  const { email, password } = request.body
  users.signIn(email, password)
    .then((validUser) => {
      // if (!user) {
      //   return response.send('Invalid Username/Password')
      // }
        return response.redirect(`/users/${userId}/todos`);
      });
});

router.get('/users/:id/todos', (request, response) => {
  const { user } = request.session;
  response.render('todo/todo-list');
});

router.post('/users/:id/todos', (request, response) => {
  const userId = request.params.id
  const item = request.body
  todos.addToDo(userId, item)
    .then((todo) => {
      return response.send('Your To Do Item has been added to your growing list!')
    });
});

module.exports = router;
