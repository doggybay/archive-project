const path = require('path');

// express declaration
const express = require('express');

// next declaration
const next = require('next');

// using objection
const { Model } = require('objection');

// middleware for express
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// knex instance
const knexInstance = require('./db/knex');
Model.knex(knexInstance);

// port and env declaration
const port = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';

// app instance for next js and request handler for pages in next
const app = next({ dev });
const handle = app.getRequestHandler();

const renderFullPage = (html, css) => {

};

const handleRender = (req, res) => {

};

app.prepare().then(() => {
  const server = express();

  // importing routes
  const users = require('./routes/users');
  const archiveItems = require('./routes/archiveItems');
  const types = require('./routes/types');

  // middleware
  server.use(logger('dev'));
  server.use(cors());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  
  // server.use(handleRender)
  
  // using routes
  server.use('/api', users);
  server.use('/api', archiveItems);
  server.use('/myarchive/api', archiveItems)
  server.use('/api', types);

  // next pass through
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  });
});
// const index = require('./routes/indexRoutes');
// const todos = require('./routes/todosRoutes');

// const app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



// app.use('/', index);
// app.use('/todos', todos);

// app.listen(port, function() {
//   console.log("listening on port: ", port);
// })
