const db = require('../../models/db/db');
const todos = require('../../models/db/todos');
const users = require('../../models/db/users');

const router = require('express').Router();

router.get('/signup', (request, response) => {
  response.render('users/sign-up');
})
