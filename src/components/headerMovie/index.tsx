import React, { useState, useEffect, FC } from "react"; 
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieT } from "../../types/interfaces"; 
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import { ListedMovie } from "../types/interfaces";


const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
    
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  
  },
};



const MovieHeader: React.FC<MovieT> = (props) => {
  
    const favourites =    localStorage.getItem('favourites')
    
  //TODO: Check if current movie is in favourites
  
 console.log(favourites)
  return (
    <Paper component="div" sx={styles.root}>
      
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      
      
      <CardHeader
        avatar={
          props.favourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        
      />
          
          
        
       

          
     
      <Typography variant="h4" component="h3">
        {props.title}{"   "}
        <a href={props.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${props.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;