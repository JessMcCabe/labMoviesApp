import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieList } from "../../types/interfaces";



interface MovieListProps extends BaseMovieList {
  addToFavourites: (movieId: number) => void;
  selectFavourite: (movieId: number) => void;
}


const MovieList: React.FC<MovieListProps> = (props) => {
  const movies=props.movies;
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} {...m} selectFavourite={props.addToFavourites} />
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;