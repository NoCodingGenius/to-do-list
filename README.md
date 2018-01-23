# To Do List

A simple to-do list app, where users can store their tasks in a database, see their tasks, and mark them complete.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  models/             # database client & db schema
  server/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting Up Your Database

Use the following commands to set up and seed your database:

1. Create PostgreSQL database `todo`: `$ npm run db:create`
2. Set up database tables from `schema.sql`: `$ npm run db:schema`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Starting your development server

Run the following command in the terminal:
`$ npm start`
