const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res) => {
    let id = req.params.id
    let queryText = `SELECT name FROM movies 
JOIN movie_genre ON movies.id=movie_genre.movie_id
JOIN genres ON movie_genre.genre_id=genres.id
WHERE movies.id = $1
ORDER BY title;`;
console.log (id);
    pool.query(queryText, [id])
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
    }) // End Catch
}) // END GET Route

module.exports = router;