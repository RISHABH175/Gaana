import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import Carousel1 from './components/Carousel1';
import Carousel2 from './components/Carousel2';
import Carousel3 from './components/Carousel3';
import Footer from './components/Footer';
import Navbar1 from './components/Navbar1';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';
import './App.css'; 
import Paper from '@material-ui/core/Paper';

import React, { useRef, useState } from "react";


// Import Swiper styles

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function App() {
  const classes = useStyles()
  return (
    
   <div >
  <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
      <Navbar/>
      
      <Navbar1/>
      <div className={classes.root}>
      <Grid container spacing={3}>
       
          <Carousel />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Trending Songs</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>New Releases</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Top Charts</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Popular in Hindi</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Featured Artists</h1>
          <Carousel2 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Radio</h1>
          <Carousel3 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Just Arrived</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Retro Playlist</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Gaana Recommends</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Gaana Originals</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Popular in Punjab</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Star Gallery</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Bhakti</h1>
          <Carousel1 />
         
      
      </Grid>
      <Grid container >
       <h1 style={{marginLeft:"20px"}}>Mehfil-E-Ghazal</h1>
          <Carousel1 />
         
      
      </Grid>
    </div>
    <div className="page-container">
      <div className="content-wrap">
    
   </div>
   <Footer />
   </div>
   </div>
  

  );
}



export default App;



// install Swiper modules



