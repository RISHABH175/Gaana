import { alpha, AppBar, Badge, Button, InputBase, makeStyles, Toolbar,Typography } from '@material-ui/core';
import { Cancel, MicNone, Search, Translate  } from '@material-ui/icons';
import { DarkMode, Login } from '@mui/icons-material';
import { useState } from 'react';
import "../Carousel.css";


const useStyles = makeStyles((theme) => ({
toolbar:{
 
  
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
   
    [theme.breakpoints.down('sm')]: {
     flexDirection:"column"
    

    },
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
    width:"50%"
    
  },
   
 

},
icons:{
    display:"flex",
    color:"red",
    alignItems:"center",
    
    gap:"1rem",
  [theme.breakpoints.down('sm')]: {
    display:(props)=> props.open ? "none":"flex",
    gap:"0.01rem",
    

      },
       


},
searchButton:{
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
}

}));

function Navbar() {
const [open, setOpen]= useState(false);
  const classes = useStyles({open})
  return (
   <AppBar  color='' position='static' zindex={-1} style={{marginBottom:"0px"}}>
  <Toolbar className={classes.toolbar}>
    
  <a className='link' href='http://localhost:3000/'> <Typography variant='h6' style={{color:"red",marginLeft:"20px",marginBottom:"5px",cursor:"pointer"}}><h1>Gaana</h1></Typography></a> 
<div className={classes.search}>
    <Search/>
    <InputBase  placeholder='Search..' className={classes.input}/>
    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
</div>
<div className={classes.icons}>
    <Search className={classes.searchButton} onClick={()=> setOpen(true)}/>
<Badge badgeContent={"new"} color="secondary">
<Button  variant="outlined" style={{color:"red",margin:"5px"}}>
 <h6 style={{margin:"3px"}}>Go ad free</h6>
</Button>
</Badge>
<Button  variant="outlined" style={{color:"red"}}>
<h6 style={{margin:"3px",textAlign:"center"}}>Get Gaana Plus</h6>


</Button>

<Button  variant="transparent" >
<h6 style={{margin:"3px"}}> <Translate/></h6>

    
</Button>
<Button  variant="transparet" >
  <DarkMode/>
</Button>
<Button  variant="transparent" >
<h6 style={{margin:"3px"}}> <Login /></h6>


</Button>

</div>
  </Toolbar>
   </AppBar>
  );
};


export default Navbar;
