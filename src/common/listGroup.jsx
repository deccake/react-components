import React from "react";
import '../App.css';

const ListGroup = props => {
  const { genres, onGenreSelect, selectedGenre } = props;
  // let allGenres = ['All Genres', ...genres]
  console.log("genres", genres);
  return (
    <ul class="list-group">
      {genres.map(genre => {
        return <li key={genre.name} onClick={() => onGenreSelect(genre)} class={selectedGenre === genre 
        ? "list-group-item active" : "list-group-item" }>{genre.name}</li>;
      })}
    </ul>
  );
};

export default ListGroup;
