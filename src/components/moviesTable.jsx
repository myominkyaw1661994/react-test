import React, { Component } from 'react';
import TableBody from './tableBody';
import Like from './like';
import TableHeader from './tableHeader';

class MoviesTable extends Component {

    colums = [
        { path: 'title', lable: 'Title' },
        { path: 'genre.name', lable: 'Genre' },
        { path: 'numberInStock', lable: 'Stock' },
        { path: 'dailyRentalRate', lable: 'Rate' },
        {
            key: 'like', lable: 'Like', content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        },
        {
            key: 'delete', lable: 'Action', content: (movie) =>
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-sm btn-danger"
                >Delete</button>
        },
    ]

    render() {
        const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
        return (
            <table className="m-5 table">
                <TableHeader
                    colums={this.colums}
                    onSort={onSort}
                    sortColumn={sortColumn}
                />

                <TableBody
                    data={movies}
                    colums={this.colums}
                    onLike={onLike}
                    onDelete={onDelete}
                />


            </table>

        );
    }
}

export default MoviesTable;
