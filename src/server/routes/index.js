const db = require('../../models/db/db');
const todos = require('../../models/db/todos');
const users = require('../../models/db/users');

const router = require('express').Router();

router.get('/', (request, response) => {
  response.render('todo/todo-list');
});

router.get('/signup', (request, response) => {
  response.render('users/sign-up');
});

router.post('/signup', (request, response) => {
  users.signUp(request.body)
  .then((user) => {
    response.redirect('/');
  });
});

router.get('/signin', (request, response) => {
  response.render('users/sign-in');
});

router.post('/signin', (request, response) => {
  const { email, password } = request.body
  users.signIn(email, password)
  .then((user) => {
    if (!user) {
      return response.send('Invalid Username/Password')
    }
      return response.redirect('/');
  });
});

module.exports = router;
