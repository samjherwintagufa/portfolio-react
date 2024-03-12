
import './App.css';
import React from 'react';
import education from './icons/education.jpg';
import skills from './icons/skills.jpg';
import personalinfo from './icons/personalinfo.jpg';
import pic from './icons/pic.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Drawer from './components/Drawer';

function App() {
  const name = "Sam Jherwin Tagufa";
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];
  return (
    <div className="App">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"MY PAST PROJECTS"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
      <Header />
      <main>
        <span className='profilepic'><Avatar alt="sam tagufa" src={pic} sx={{ width: 100, height: 100 }} /></span>
        
        <h1>Hello, I'm {name}</h1>
        <Button variant="contained" onClick={handleClickOpen}>MY PROJECTS</Button>
        <div className='container-div'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={education}
          alt="Icon representing [insert description here]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            EDUCATION
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span className='education'>
              <label>College: Laguna State Polytechnic University SCC</label>
              <label>SHS: Laguna State Polytechnic University SCC</label>
              <label>JHS: TALANGAN INTEGRATED NATIONAL HIGH SCHOOL</label>
              <label>ELEMENTARY: TALANGAN ELEMENTARY SCHOOL</label>
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={skills}
          alt="Icon representing [insert description here]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            SKILLS
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <span className='education'>
              <label>C# | JAVA | PYTHON | PYTHON FLASK | C++ | VB.NET</label>
              <label>HTML | CSS | JS | PHP | REACT | JQUERY | BOOTSTRAP</label>
              <label>MYSQL | ORACLE</label>
              
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={personalinfo}
          alt="Icon representing [insert description here]"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PERSONAL INFORMATION
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <span className='education'>
              <label>Github: samjherwintagufa</label>
              <label>Email: sanadosam0@gmail.com</label>
              <label>Facebook: Sam Jherwin Sanado Tagufa</label>
              
            </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
        </div>
      </main>
      <Drawer />
      <Footer />
    </div>
  );
}

export default App;

