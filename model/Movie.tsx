import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({}, { collection: 'Movies' }); // Define schema for your collection
const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema); // Create model

export default Movie;