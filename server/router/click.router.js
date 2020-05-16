const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "detail" ORDER by id DESC LIMIT 1;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
    }) // End Catch
}) // END GET Route

// POST Route
router.post('/', (req, res) => {
    // let del = `DELETE FROM "detail";`;  /* DELETE did not work, will just pull highest ID */
    let queryText = `INSERT INTO detail (movie_id, title, poster, description) VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.data.id, req.body.data.title, req.body.data.poster, req.body.data.description])
        .then((result) => {
            res.sendStatus(200)
        }).catch((error) => {
            console.log(`An error has occurred`, error);
            res.sendStatus(500);
        }) // End Catch
}) // END POST Route

module.exports = router;