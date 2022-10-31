var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });
// let getById = `https://api.themoviedb.org/3/movie/&{movieId}?api_key=92b023c677ec515ad3da46754457863d&language=en-US&`

// GET Movie list
router.get("/", function(req, res, next) {
  db("SELECT * FROM movies;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one movie
router.get("/{movie_id}", async (req, res, next) => {
  //your code here
  let movieId = req.params.id; //the id request
  try {
    let results = await db(`SELECT * FROM movies WHERE id = ${movieId}`);
    let movies = results.data;
    if (movies.length === 0) {
      res.status(404).send({ error: "Movie not found" });
    } else {
      res.send(movies[0]);
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
  
});

router.post("/", async (req, res, next) => {
  //your code here
  let { movieId, title, genre, poster_path } = req.body;
  let sql = `INSERT INTO movies (movieId, title, genre, poster_path, action) VALUES (${movieId}, '${title}', '${genre}', '${poster_path}', "${action}")`;

  try {
    await db(sql); //add new student
    let result = await db("SELECT * FROM movies");
    let movies = result.data;
    res.status(201).send(movies);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});




module.exports = router;
