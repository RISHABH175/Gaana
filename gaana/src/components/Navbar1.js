import { alpha, AppBar, Badge, Button, InputBase, makeStyles, Toolbar,Typography } from '@material-ui/core';
import { Cancel, Search, Translate  } from '@material-ui/icons';
import { DarkMode, Login } from '@mui/icons-material';
import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import "../Carousel.css";



const useStyles = makeStyles((theme) => ({
    
toolbar:{
    display:"flex",
    justifyContent:"start",
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column"
       
 
     },
},
AppBar:{
    [theme.breakpoints.down('sm')]: {
        
        

      }
},
search:{
    display:"flex",
    alignItems:"center",
    borderRadius:"5%",
    width:"50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down('lg')]: {
        display:"none"
        
      },
    [theme.breakpoints.up('md')]: {
        display:"flex",
        marginLeft:theme.spacing(2),


      },
    [theme.breakpoints.down('sm')]: {
        display:(props)=> props.open ? "flex":"none",
        

      },
},
input:{
    color:"black",
   marginLeft:theme.spacing(1),
   [theme.breakpoints.up('lg')]: {
    width:"70%"
    
  },
   
 

},
icons:{
    display:"flex",
    color:"red",
    alignItems:"center",
    
    gap:"1rem",
  [theme.breakpoints.down('sm')]: {
    display:(props)=> props.open ? "none":"flex",
    gap:"0.1rem",
    

      },
       


},

       



searchButton: {
  color:"black",
    marginLeft:theme.spacing(1),
    marginRight:theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
        display:"none"
      },
    [theme.breakpoints.up('md')]: {
        display:"none"
      },

},
cancel:{
    [theme.breakpoints.up('lg')]: {
        display:"none"
       
      },
    [theme.breakpoints.up('md')]: {
        display:"none"
      },
},

}));

function Navbar() {
const [open, setOpen]= useState(false);
  const classes = useStyles({open})
  return (
   <AppBar id="a" color='' position='static' >
  <Toolbar className={classes.toolbar}>
   

<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>All</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Trending Songs</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>New Songs</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Old Songs</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Mood & Genres</h4>

    
</Button>

<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Album</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Radio</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>Podcast</h4>

    
</Button>
<Button  variant="transparent" >
<h4 style={{margin:"1px"}}>My Music</h4>

    
</Button>
  </Toolbar>
   </AppBar>

  );
  
};

function myfunction() {
    return (
        <div>
            <Button  variant="transparent" >
  <h4 style={{margin:"1px"}}>My Music</h4>

    
</Button>
        </div>

    );
};
export default Navbar;
