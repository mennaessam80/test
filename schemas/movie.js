const mongoose = require('mongoose');
const movieschema = new mongoose.Schema({
    title:{type: String ,require:true},
    description:{type: String ,require:true},
    rate: { type: Number, required: true },
    created_at: { type: Date, default: new Date() },
    updated_at: { type: Date, default: new Date() },
})
const Movie = mongoose.model("movie", movieschema);

module.exports = Movie;