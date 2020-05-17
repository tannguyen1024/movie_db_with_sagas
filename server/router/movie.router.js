const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT movies.id, title, description, poster, array_agg(name) as genre FROM movies
JOIN movie_genre ON movies.id=movie_genre.movie_id
JOIN genres ON movie_genre.genre_id=genres.id
GROUP BY movies.id
ORDER BY title;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
    }) // End Catch
}) // END GET Route

// GET Route for CLICKED Movie
router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM movies WHERE id = $1`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log(error);
        }) // End Catch
}) // END GET Route

// PUT Route
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `UPDATE "movies" SET title=$2, description=$3 WHERE id=$1;`;
    pool.query(queryText, [id, req.body.title, req.body.description])
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log(`An error has occurred`, error);
            res.sendStatus(500);
        }) // End Catch
}) // END PUT Route

module.exports = router;