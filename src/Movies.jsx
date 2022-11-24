import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    renderMovies() {
        const countMovies = this.state.movies.length;
        if (countMovies != 0) return 'Showing ' + countMovies + ' movies in the database.';

        return 'There are no movies in database.';
    }

    render() {
        return (
            <React.Fragment>
                <p className='m-3'>{this.renderMovies()}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                        </tr>)}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Movies;