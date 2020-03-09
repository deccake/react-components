import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "./paginate";
import ListGroup from "../common/listGroup";
import { getGenres, genres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import axios from 'axios';
import _ from "lodash";
import '../App.css';

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "",
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };

 async componentDidMount() {
    const res = await axios.get("http://localhost:8080/hello",
    { headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'text/plain'}})
    console.log('res',res)
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = id => {
    const movies = this.state.movies.filter(m => m._id !== id);
    this.setState({ movies });
  };

  handleLike = movie => {
    console.log("Like click", movie);
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    console.log("index", index);
    this.setState({ movies });
  };

  handlePageChange = page => {
    console.log("page changed", page);
    this.setState({ currentPage: page });
  };

  handleGenres = genre => {
    console.log("this.state.movies", genre);
    //   const movies = this.state.movies.filter(movie => movie.genre.name === genre.name)
    //   console.log("comedy",movies)
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const { selectedGenre, movies: allMovies } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(
      filtered,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    console.log("sorted", sorted);

    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    console.log("movies", movies);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    let { movies: allMovies, selectedGenre } = this.state;
    if (this.state.movies.length === 0) return <p>No mives</p>;

    const pageData = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={this.state.genres}
            onGenreSelect={this.handleGenres}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          Showing {pageData.totalCount}
          <MoviesTable
            movies={pageData.data}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumns={this.state.sortColumn}
          />
          <Pagination
            itemCount={pageData.totalCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
