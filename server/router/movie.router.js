const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM movies ORDER by title`;
    pool.query(queryText)
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
    pool.query(queryText, [id, req.body.data.title, req.body.data.description])
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log(`An error has occurred`, error);
            res.sendStatus(500);
        }) // End Catch
}) // END PUT Route

module.exports = router;