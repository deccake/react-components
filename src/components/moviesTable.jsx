import React, { Component } from "react";
import Like from "../common/like";
import Table from "../common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "rent" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { onSort, movies, sortColumns } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumns={sortColumns}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
