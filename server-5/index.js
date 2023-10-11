const express = require('express');
const app = express();
const port = 3015;
const filmRouter = require('./router/film');
const categoryRouter = require('./router/category');
const categoryFilm = require('./router/categoryFilm');
const filmIdRouter = require('./router/filmId');

// Test local host 3015
app.get('/', (request, response) => {
  response.send('Hello Ibnu :)');
});

app.use('/', filmRouter);
app.use('/category', categoryRouter);
app.use(categoryFilm);
app.use('/', filmIdRouter); 

app.listen(port, () => {
  console.log(`Running bang di port ${port}`);
});
