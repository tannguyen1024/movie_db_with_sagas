const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter = require('./router/movie.router'); /* This allows use of feedback.router.js */
const genreRouter = require('./router/genre.router'); /* This allows use of feedback.router.js */
const clickRouter = require('./router/click.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies', movieRouter); /* This re-routes anything that goes to /movies to router js file */
app.use('/genres', genreRouter); /* This re-routes anything that goes to /genres to router js file */
app.use('/click', clickRouter);
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});