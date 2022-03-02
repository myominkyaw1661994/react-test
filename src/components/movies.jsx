import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import { getGenres } from '../services/fakeGenreService.js';
import Like from './like';
import Pagnation from './pagination';
import ListGroup from './listgroup';
import { paginate } from '../utils/paginate';
import MoviesTable from './moviesTable';
import _ from 'lodash';


class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        sortColumn: { path: 'title', order: 'asc' }
    };

    componentDidMount = () => {
        const allGenres = [{ "name": "All Genres" }, ...getGenres()];
        this.setState({ movies: getMovies(), genres: allGenres });
    }

    handleDelete = (movie) => {
        let movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies });
    }

    handleLike = (movie) => {
        console.log(movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber })
    }

    handleGenreSelect = (item) => {
        this.setState({ selectedGenre: item, currentPage: 1 });
    }

    handleSort = (sortColumn) => {
        this.setState({ sortColumn })
    }

    // getPageData = () => {
    //     const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    //     const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    //     const movies = paginate(sorted, currentPage, pageSize);

    //     return { totalCount: filtered.length, data: movies };
    // }

    render() {
        const { movies: allMovies, currentPage, pageSize, genres, selectedGenre, sortColumn } = this.state;

        const count = this.state.movies.length;
        if (count === 0)
            return <p className="m-3">There are no movies in the database.</p>


        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize);
         

        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <ListGroup
                            selectedGenre={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                            genresList={genres} />
                    </div>
                    <div className="col">
                        <p className="m-3">Showing {filtered.length} movies in the database.</p>
                        <MoviesTable
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}
                            sortColumn={sortColumn}
                        />

                        <Pagnation itemCount={filtered.length}
                            pageSize={this.state.pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={this.state.currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
