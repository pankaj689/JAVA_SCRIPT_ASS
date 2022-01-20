const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    var op=operation
    var mv=movie
    if (op==='add'){
        movies.push(mv)
        return movies 
    } else if (op==='remove'){
        movies.pop(mv)
        return movies 
    }
    
}

module.exports = favouriteMovie;
