
const express = require('express');
const Movie=require('../schemas/movie');
const logg = require('../midlewere/log');
const router = express.Router();
let movies = [];

router.get('/',logg,async (req, res) => { //list 
    const movies =await Movie.find({});
  res.send({ movies })

});
router.post('/',logg, (req, res) => { //add
  const body = req.body;
  const newmovie = new Movie ({ 
    title: body.title,
     description: body.description, 
     rate: body.rate, 
    });
     newmovie.save();
    res.send(newmovie);
});
router.put('/:id',logg, async (req, res) => {   //update
    const id = req.params.id;
    // TODO: validate the body request 
    const body = req.body;
    if (!id) {
    res.send({ error: true, message: "id is not defined" });
    return;
    }
    const movie = await Movie.findOneAndUpdate({ _id: id }, {...body }, { new: true});
 res.send(movie);
  });
router.delete("/:id",logg,  async (req, res) => { //delete
    const id = req.params.id;
    if (!id) {
        res.send({ error: true, message: "id is not defined" });
        return;
    }
    const result = await Movie.findByIdAndDelete(id);
    res.send(result);
});

module.exports = router;
