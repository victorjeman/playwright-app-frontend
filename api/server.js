const jsonServer = require('json-server');
const fs = require('fs');

const data = require('./data/db.json');

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/reset', (req, res) => {
  res.jsonp(req.query);

  const src = './api/data/db.example.json';
  const dest = './api/data/db.json';

  fs.copyFile(src, dest, (error) => {
    if (error) {
      console.error(error);
      console.log('here i am');
      return;
    }

    console.log('DB reset successfully!');
  });
});

server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running, see http://localhost:8080');
});
