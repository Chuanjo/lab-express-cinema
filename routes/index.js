const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model")

/* Home page */

router.get('/', (req, res, next) => res.render('index'))

/* Movies page */

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((response)=>{
        // console.log(response)
        res.render("movies.hbs", {response})
    })
    .catch((err)=>{
        next(err)
    })
})

/* Movies detailed page */

router.get("/movies/:id",(req,res,next)=>{

    Movie.findById(req.params.id)
    .then((response) =>{
      res.render("movie-details.hbs", {response})
    })
    .catch((err)=>{
      next(err)
    })
  })

module.exports = router;
