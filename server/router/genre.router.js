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

router.post('/new/:id', (req,res)=>{
    let queryText = `INSERT INTO "movie_genre" (movie_id, genre_id) VALUES ($1, $2);`; /* Still needs work */
    console.log(req.body);
        console.log('You have',req.body.movie_id, req.params.id);
    pool.query(queryText, [req.body.movie_id, req.params.id])
    .then((result)=> {
        res.sendStatus(201)
    }).catch((error)=>{
        console.log(error)
        res.sendStatus(500)
    })
})

router.post('/delete/:id', (req,res)=>{
    let queryText = `DELETE FROM "movie_genre" WHERE movie_id=$1 AND genre_id=$2;`; /* Still needs work */
    console.log('You have',req.body.movie_id, req.body.genre);
    pool.query(queryText, [req.body.movie_id, req.params.id])
    .then((result)=> {
        res.sendStatus(201)
    }).catch((error)=>{
        console.log(error)
        res.sendStatus(500)
    })
})

module.exports = router;